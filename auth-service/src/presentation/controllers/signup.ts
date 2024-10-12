import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDepencencies";
import ErrorResponse from "../../_lib/error/ErrorResponse";
import { signupValidation } from "../../_lib/validation/signupValidation";
import userCreatedProducer from "../../infrastructure/kafka/producers/userCreatedProducer";
import userCreatedEmailSendProducer from "../../infrastructure/kafka/producers/userCreatedEmailSendProducer";
import { hashPassword } from "../../_lib/bcrypt/hashPassword";
import { generateAccessToken, generateRefreshToken } from "../../_lib/jwt";
import { string } from "joi";

export const signupController = (dependencies: IDependencies) => {
  const {
    useCases: { signupUserUseCase, findByEmailUseCase, verifyOtpUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    const userCredentials = req.body;
    const { email } = userCredentials;

    // To check whether the user email is taken or not
    if (!userCredentials.otp) {
      try {
        const userExist = await findByEmailUseCase(dependencies).execute(email);
        if (userExist) {
          return next(
            ErrorResponse.conflict(
              "email is already registered. try another email"
            )
          );
        }
      } catch (error: any) {
        console.log("something went wrong");
        throw new Error(error || "something went wrong");
      }
    }

    // if user not present sent otp to user using nodemailer
    if (!userCredentials.otp) {
      try {
        // await userCreatedProducer(email,'notification-service-topic');
        await userCreatedEmailSendProducer(email, "notification-service-topic");
        return res
          .status(200)
          .json({ success: true, message: "otp sent successfully" });
      } catch (error: any) {
        console.log(error, "something went wrong in the otp section");
        return res.json({
          success: false,
          message: "something went wrong in otp",
        });
      }
    }

    // verify otp if otp is present
    if (userCredentials.otp) {
      try {
        const { email, otp } = userCredentials;
        const isVerified = await verifyOtpUseCase(dependencies).execute(
          email,
          otp
        );
        console.log("🚀 ~ returnasync ~ isVerified:", isVerified);

        if (!isVerified) {
          throw new Error("otp is invalid");
          // return res.status(401).json({user:userCredentials,success:false,message:"OTP is invalid! Please try again"})
        }
      } catch (error: any) {
        console.error(
          error,
          "something went wrong in verify otp signup controller function"
        );
        return next(ErrorResponse.notFound(error?.message));
        // throw new Error(error?.message)
        // return res.json({
        //     success: false,
        //     message: "otp invalid"
        // })
      }
    }

    // creating new user
    if (userCredentials.otp) {
      try {
        const { error, value } = signupValidation.validate(userCredentials);
        if (error) {
          throw new Error(error?.message);
        }
        value.password = await hashPassword(value.password);

        const userData = await signupUserUseCase(dependencies).execute(value);
        console.log("🚀 ~ returnasync ~ userData:", userData);

        if (!userData) {
          return res.json({
            success: false,
            message: "something went wrong creating user in signup controller",
          });
        }

        // sending data to various services
        await userCreatedProducer(userData, "user-service-topic");
        await userCreatedProducer(userData, "course-service-topic");
        await userCreatedProducer(userData, "chat-service-topic");
        await userCreatedProducer(userData, "payment-service-topic");
        await userCreatedProducer(userData, "notification-service-topic");

        const accessToken = generateAccessToken({
          _id: String(userData?._id),
          email: userData.email,
          role: userData.role,
        });

        console.log("🚀 ~ returnasync ~ userData:", userData);
        const refresh = generateRefreshToken({
          _id: String(userData?._id),
          email: userData.email,
          role: userData.role,
        });

        console.log("user created succesfully");
        res.cookie("access_Token", accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        });
        res.cookie("refresh_Token", refresh, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        });

        res
          .status(200)
          .json({ success: true, data: userData, message: "user created" });
      } catch (error: any) {
        console.error(error, "error in sign up controller");
        next(error);
      }
    }
  };
};

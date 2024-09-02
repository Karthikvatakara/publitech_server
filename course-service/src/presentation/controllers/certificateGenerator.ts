import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import PDFDocument from 'pdfkit';
import { CertificateTemplate } from "../../utils/certificate/certificateTemplate";

export const certificateGeneratorController = ( dependencies: IDependencies ) => {
    const { useCases: { fetchExamResultByIdUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const { assessmentRef } = req.params;
            console.log("{{{{{{{{{}}}}}}}}}}}}}}}}}}")
            console.log("🚀 ~ returnasync ~ assessmentRef:", assessmentRef)
            
            const result = await fetchExamResultByIdUseCase(dependencies).execute(assessmentRef);
            // console.log(result?.userRef?.username,">>>>>>>>>>>>>>>>>>>>>>>..");
            
            if( !result ) {
                throw new Error("result not found")
            }

            const doc = new PDFDocument({
                size: 'A4',
                layout: 'landscape'
            });

            res.setHeader('content-Type','application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=certificate-${assessmentRef}.pdf`);

            doc.pipe(res);

            // doc.fontSize(25).text('Certificate of Completion', 100, 80);
            // doc.fontSize(15).text(`This is to certify that ${result?.userRef?.username}`, 100, 160);
            // doc.fontSize(15).text(`has successfully completed the exam with a score of ${result.score}/${result.totalScore}`, 100, 190);
            // doc.fontSize(10).text(`Date: ${new Date().toLocaleDateString()}`, 100, 300);
            CertificateTemplate(doc,result)
            doc.end();

        }catch(error){
            next(error)
        }
    }
}
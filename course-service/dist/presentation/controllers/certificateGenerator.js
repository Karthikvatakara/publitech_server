"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.certificateGeneratorController = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const certificateTemplate_1 = require("../../utils/certificate/certificateTemplate");
const certificateGeneratorController = (dependencies) => {
    const { useCases: { fetchExamResultByIdUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { assessmentRef } = req.params;
            console.log("{{{{{{{{{}}}}}}}}}}}}}}}}}}");
            console.log("🚀 ~ returnasync ~ assessmentRef:", assessmentRef);
            const result = yield fetchExamResultByIdUseCase(dependencies).execute(assessmentRef);
            // console.log(result?.userRef?.username,">>>>>>>>>>>>>>>>>>>>>>>..");
            if (!result) {
                throw new Error("result not found");
            }
            const doc = new pdfkit_1.default({
                size: 'A4',
                layout: 'landscape'
            });
            res.setHeader('content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=certificate-${assessmentRef}.pdf`);
            doc.pipe(res);
            // doc.fontSize(25).text('Certificate of Completion', 100, 80);
            // doc.fontSize(15).text(`This is to certify that ${result?.userRef?.username}`, 100, 160);
            // doc.fontSize(15).text(`has successfully completed the exam with a score of ${result.score}/${result.totalScore}`, 100, 190);
            // doc.fontSize(10).text(`Date: ${new Date().toLocaleDateString()}`, 100, 300);
            (0, certificateTemplate_1.CertificateTemplate)(doc, result);
            doc.end();
        }
        catch (error) {
            next(error);
        }
    });
};
exports.certificateGeneratorController = certificateGeneratorController;

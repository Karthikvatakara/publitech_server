 export const CertificateTemplate = (doc:any, examResult:any) => {
    // Set up some basic properties
    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;
  
    // Add a background color
    doc.rect(0, 0, pageWidth, pageHeight).fill('#f0f0f0');
  
    // Add a border
    doc.rect(20, 20, pageWidth - 40, pageHeight - 40).stroke('#3498db');
  
    // Add a header
    doc.fontSize(40)
       .font('Helvetica-Bold')
       .fillColor('#2c3e50')
       .text('Certificate of Completion', 0, 60, { align: 'center' });
  
    // Add a decorative line
    doc.moveTo(100, 120)
       .lineTo(pageWidth - 100, 120)
       .stroke('#3498db');
  
    // Add main content
    doc.fontSize(20)
       .font('Helvetica')
       .fillColor('#34495e')
       .text(`This is to certify that`, 0, 180, { align: 'center' });
  
    doc.fontSize(30)
       .font('Helvetica-Bold')
       .fillColor('#2980b9')
       .text(`${examResult?.userRef?.username}`, 0, 220, { align: 'center' });
  
    doc.fontSize(20)
       .font('Helvetica')
       .fillColor('#34495e')
       .text(`has successfully completed the exam with a score of`, 0, 280, { align: 'center' });
  
    doc.fontSize(30)
       .font('Helvetica-Bold')
       .fillColor('#27ae60')
       .text(`${examResult.score} / ${examResult.totalScore}`, 0, 320, { align: 'center' });
  
    // Add date
    doc.fontSize(14)
       .font('Helvetica')
       .fillColor('#7f8c8d')
       .text(`Date: ${new Date().toLocaleDateString()}`, 0, pageHeight - 100, { align: 'center' });
  
    // Add a signature line
    doc.moveTo(pageWidth / 2 - 100, pageHeight - 150)
       .lineTo(pageWidth / 2 + 100, pageHeight - 150)
       .stroke('#bdc3c7');
  
    doc.fontSize(14)
       .text('Authorized Signature', pageWidth / 2 - 60, pageHeight - 140);
  
    // You could add a logo here
    // doc.image('path/to/logo.png', 50, 50, { width: 100 });
  };
  
//   module.exports = CertificateTemplate;
const downloadPdf = (pdf: any) => {
  const link = document.createElement("a");
  link.href = pdf;
  link.download = "cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export { downloadPdf };

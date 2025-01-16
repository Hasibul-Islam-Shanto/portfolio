const downloadPdf = (pdf: any) => {
  const link = document.createElement("a");
  link.href = pdf;
  link.download = "resume_hasibul_Islam_shanto.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export { downloadPdf };

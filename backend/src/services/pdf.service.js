

import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export const extractTextFromPDF = async (buffer) => {

  const data = new Uint8Array(buffer);

  
  const loadingTask = pdfjsLib.getDocument({
    data,
    useWorkerFetch: false,
    isEvalSupported: false,
 
    disableFontFace: true 
  });

  const pdf = await loadingTask.promise;
  let fullText = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();


    const pageText = textContent.items
      .map(item => item.str || "") 
      .join(" ");

    fullText += pageText + "\n";
  
  }

  return fullText;
};
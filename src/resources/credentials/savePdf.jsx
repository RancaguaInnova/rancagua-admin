import { pdf } from '@react-pdf/renderer';

const saveBlob = (blob, filename) => {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style.display = "none";
  let url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};

const savePdf = async (document, filename) => {
    console.log(await pdf(document).toBlob(),"document")
  saveBlob(await pdf(document).toBlob(), filename);
};
export default savePdf
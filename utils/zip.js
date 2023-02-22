import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Upload } from "upload-js";

const upload = Upload({ apiKey: "free" });
var zip = JSZip();

const onProgress = ({ progress }) => {
  console.log(`File uploading: ${progress}% complete.`);
};

export const generateZip = async (arr) => {
  if (arr.length) {
    for (const element of arr) {
      zip.file(`image_${element.file.size}.png`, element.file, {
        binary: true,
      });
    }

    const blob = await zip.generateAsync({ type: "blob" });
    return blob;
    // try {
    //   const { fileUrl } = await upload.uploadFile(blob, { onProgress });
    //   console.log(`File uploaded: ${fileUrl}`);
    // } catch (error) {
    //   console.log(error);
    // }
  }
};

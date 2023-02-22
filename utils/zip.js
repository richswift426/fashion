import JSZip from "jszip";
import { saveAs } from "file-saver";
import * as filestack from "filestack-js";

var zip = JSZip();
const key = "ABNIpc8C9R7iWvjLqRubJz";
const client = filestack.init(key);

export const generateZip = async (arr) => {
  if (arr.length) {
    for (const element of arr) {
      zip.file(`images/image_${element.file.size}.png`, element.file, {
        binary: true,
      });
    }

    const blob = await zip.generateAsync({ type: "blob" });
    // const { url } = await client.upload(blob);
    console.log(client);
    // return url;
  }
};

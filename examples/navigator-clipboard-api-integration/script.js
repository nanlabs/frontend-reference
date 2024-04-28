document.addEventListener("DOMContentLoaded", function () {
  const buttonCopy = document.getElementById("button-copy");
  const buttonTextImageCopy = document.getElementById("button-text-image-copy");
  const buttonHTMLCopy = document.getElementById("button-html-copy");

  const textToCopy = document.getElementById("text-to-copy");
  const imageToCopy = document.getElementById("image-to-copy");
  const htmlToCopy = document.getElementById("container-html");

  buttonCopy.addEventListener("click", function () {
    copyTextToClipboard(textToCopy.innerText);
  });

  buttonTextImageCopy.addEventListener("click", function () {
    copyImageAndTextToClipboard(imageToCopy, textToCopy.innerText);
  });

  buttonHTMLCopy.addEventListener("click", function () {
    const html = htmlToCopy.innerHTML;
    copyHTMLBlob(html);
  });
});

//copy only text.
const copyTextToClipboard = async (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy text to clipboard:", error);
    });
};

//copy styles if are inline, copy all the html blob, works on gmail, not working on slack
const copyHTMLBlob = async (html) => {
  const data = new ClipboardItem({
    "text/html": new Blob([html], { type: "text/html" }),
  });
  navigator.clipboard
    .write([data])
    .then(() => {
      console.log("HTML copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy HTML to clipboard:", error);
    });
};

//copy img and text to slack because data is separated in ClipboardItem (only text on gmail because is the first item)
const copyImageAndTextToClipboard = async (imgElement, text) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = imgElement.width;
  canvas.height = imgElement.height;
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      const data = new ClipboardItem({
        "text/plain": new Blob([text], { type: "text/plain" }),
        "image/png": blob,
      });
      navigator.clipboard
        .write([data])
        .then(() => {
          console.log("Image and text copied to clipboard");
        })
        .catch((error) => {
          console.error("Failed to copy image and text to clipboard:", error);
        });
    });
  };
  img.src = imgElement.src;
};

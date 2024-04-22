# Navigator Clipboard Guidance

This is a simple example of an HTML web page that uses clipboard API to copy text, image or HTML to the user's clipboard when clicking a button.

## Functionality

The index.html file contains a web page with a title, text and image with some buttons to copy. When a "Copy Button" is clicked, different elements are automatically copied to the user's clipboard using the navigator.clipboard API.

The script.js file contains the JavaScript code that handles the functionality of copying text, text & image or HTML to the clipboard. It uses document.addEventListener to listen for the DOMContentLoaded event and then adds an event listener to the button to detect clicks. When the button is clicked, the text is selected and copied to the clipboard using navigator.clipboard.writeText().

Off course the navigator.clipboard API is available in other frontend frameworks like React, Angular, Vue, etc.

## How to Test the Example

1. Clone or download this repository to your computer.
2. Open Visual Studio Code or another text editor.
3. Open the project folder in the editor.
4. Open the index.html file in your web browser.
5. You can right-click on index.html in the editor and select "Open with Live Server" if you have the Live Server extension installed in Visual Studio Code.
6. Once the web page loads in your browser, click the "Copy Text" button.
7. Paste the elements to test it.

## Explanation of the behavior of clipboard API

It is important to note that the behavior changes depend on how you saved the data in the clipboard and where you paste it.

### Copy Text Button

When you click the "Copy Text" button, the text inside the paragraph 'Lorem text example' is copied to the clipboard.

In this example the text is copied to the clipboard using the navigator.clipboard.writeText() method.
The clipboard can be pasted into any text editor or input field.

```javascript
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
```

### Copy text & image Button

When you click the "Copy text & image" button, the text inside the paragraph 'Lorem text example', and the image is copied to the clipboard.

In this example the text and image are copied to the clipboard using the navigator.clipboard.write() method using a clipboardItem object with the text and image.
An important note is that the behavior changes depending on where you paste the clipboard. For example, if you paste it in Slack the text is pasted on the message input field and the image is pasted as a file. If you paste it in Gmail only the text is pasted.

```javascript
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
```

### Copy HTML Blob Button

When you click the "Copy HTML" button, the HTML code inside the div container is copied to the clipboard.

In this example the HTML code is copied to the clipboard using the navigator.clipboard.write() method using a clipboardItem object with the HTML code.

Another note is that if we want to grab the styles of the HTML code we need to add the styles inline in the HTML code.

```javascript
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
```

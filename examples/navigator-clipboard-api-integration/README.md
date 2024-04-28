# ✂️✨ Navigator Clipboard Magic! ✨📋

Welcome to the ultimate guide to empowering your web experience with the magical clipboard API! 🚀 Your one-stop destination for copying everything, from snazzy text to eye-catching images, with a mere button click! 🖱️💥

## 🌟 What's Inside?

Inside this sorcerer's box, you'll find a spellbinding HTML page that enlists the [navigator.clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard) API to transport text, images, and HTML directly to your clipboard with an enchanting ease. 🧙‍♂️✨

## 🎩 How It Works

The `index.html` brews a potion with a title, text, and image, all paired with mystical buttons. Cast the copy spell and behold as the elements translocate to your clipboard domain! 🪄

The `script.js` is the wizard's script, conjuring JavaScript spells to channel the copying of text, image-text concoctions, or entire HTML snippets to the clipboard realm. The wizard waits for the DOMContentLoaded prophecy to be fulfilled before listening for the click incantation on the buttons. Upon click, the selected text is ensorcelled into the clipboard with `navigator.clipboard.writeText()`.

Fear not, brave coder, for this API charm works in harmony with many frontend frameworks like React, Angular, Vue, etc. 🌐

## 📝 Spell Testing

1. Summon (clone or download) this repository to your local grimoire (computer).
2. Open the `index.html` scroll in your web cauldron (browser).
3. Upon the page manifesting in your cauldron, command the "Copy Text" button with a click.
4. Invoke the paste hex somewhere to test the potency of the spell.

## 🧐 Behold the Clipboard API Mysteries

The clipboard API's temperament varies with the incantations used for sealing the data into the clipboard and the realms (apps) where you release them.

### 📄 Copy Text Button

Activate this and the text within the 'Lorem text enchantment' is bound to the clipboard.

Here's the wizard's chant:

```javascript
const copyTextToClipboard = async (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("📝 Text has been ensnared into the clipboard!");
    })
    .catch((error) => {
      console.error("❌ Failed to bind text to clipboard:", error);
    });
};
```

### 📷✉️ Copy Text & Image Button

Trigger this to capture both the text and image, sealing them into the clipboard.

In this rite, both elements are secured using the `navigator.clipboard.write()` with a ClipboardItem of text and image. Remember, the arcane result may differ across platforms!

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

### 📜 Copy HTML Blob Button

With this incantation, the HTML structure within the div sanctuary is ensnared into the clipboard.

To grasp the HTML with its styles, integrate the styles inline within the HTML code.

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

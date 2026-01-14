# Mobile Extension for Microsoft MakeCode

This extension adds **mobile‑friendly blocks** to MakeCode projects.  
It provides access to browser APIs like vibration, screen size, and keyboard events, making it easier to build projects that adapt to mobile devices.

---

## ✨ Features

- 📳 **Vibration Control**  
  Trigger device vibration for a specified duration.

- 📐 **Screen Size Blocks**  
  Get the current screen width and height.

- 📱 **Mobile Detection**  
  Check if the project is running on a mobile device.

- 🎹 **Keyboard Events**  
  React to key presses with event handlers.

- 📳 **Vibration Events**  
  Run code when vibration finishes.

---

## 🚀 Usage

After importing the extension into your MakeCode project:

- Use the block `vibrate for <ms>` to make the device vibrate.
- Use `on vibration finished` to run code after vibration ends.
- Use `on key press` to react to keyboard input.
- Use `screen width` and `screen height` to adapt layouts.
- Use `is mobile device` to detect mobile environments.

Example (TypeScript):

```typescript
mobileExtension.vibrate(500);

mobileExtension.onVibrationFinished(() => {
    console.log("Vibration complete!");
});

mobileExtension.onKeyPress((key) => {
    console.log("Key pressed: " + key);
});

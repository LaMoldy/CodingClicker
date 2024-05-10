const { app, BrowserWindow } = require("electron");
const url = require("node:url");
const path = require("node:path");

function createWindow() {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Coding Clicker",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadURL(
    url.format({
      pathname: path.join(__dirname, "./dist/index.html"),
      protocol: "file",
      slashes: true,
    })
  );

  window.menuBarVisible = false;
  window.resizable = false;
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

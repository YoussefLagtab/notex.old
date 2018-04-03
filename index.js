const { ipcMain } = require("electron");

const electron = require("electron");
const { app, BrowserWindow } = electron;
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow();
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "/src/form/index.html"),
      protocol: "file",
      slashes: true
    })
  );
  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

ipcMain.on("fs1", (e, data) => {
  win.webContents.send("fs2", data);
});

global.sharedObj = {
  filliere: null,
  semestre: null
};



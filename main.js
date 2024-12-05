import { app, BrowserWindow } from "electron";

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
    });

    mainWindow.loadFile("./renderer/dist/index.html");
    console.log("file loaded");
}

app.whenReady().then(createMainWindow);

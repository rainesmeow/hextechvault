import { app, BrowserWindow } from "electron";

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
    });

    mainWindow.loadURL("http://localhost:5173");
}

app.whenReady().then(createMainWindow);

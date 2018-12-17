const { app, BrowserWindow } = require('electron');
const { join } = require('path');
let mainWindow = BrowserWindow;
let mainUrl = 'https://glitch.com/edit';

function createWindow () {
    mainWindow = new BrowserWindow({
        title: 'Glitch Desktop',
        width: 800,
        height: 600.
        /**
        webPreferences: {
            preload: join(__dirname, 'ui', 'api.js')
        }
        */
    });

    mainWindow.loadURL(mainUrl);

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
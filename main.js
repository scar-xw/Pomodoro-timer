const {app, BrowserWindow, ipcMain} = require('electron'); //importing electron modules with JS
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
         width: 200,
      height: 298,
      resizable: false,
      maximizable: false,
      fullscreenable: false,
      frame: false, 
      transparent: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
        nodeIntegration: false
      }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

ipcMain.on('close-window', () => {
  app.quit()
})

ipcMain.on('minimize-window', () => {
  const win = BrowserWindow.getFocusedWindow()
  if (win) win.minimize()
})

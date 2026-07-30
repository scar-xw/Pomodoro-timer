const {app, BrowserWindow} = require('electron') //importing electron modules with JS

const createWindow = () => {
    const win = new BrowserWindow({
       width: 292,
      height: 430,
      resizable: false,
      maximizable: false,
      fullscreenable: false,
      frame: false, 
      transparent: false,
      webPreferences: {
        contextIsolation: true
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

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
const {app, BrowserWindow} = require('electron') //importing electron modules with JS

const createWindow = () => {
    const win = new BrowserWindow({
        width: 200,
        height: 400
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
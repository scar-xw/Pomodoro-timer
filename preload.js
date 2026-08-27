const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  closeApp: () => ipcRenderer.send('close-window'),
  minimizeApp: () => ipcRenderer.send('minimize-window')
  
})


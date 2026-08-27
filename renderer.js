function closeApp(e) {
  e.preventDefault();
  window.versions.closeApp();
}

function minimizeApp(e){
  e.preventDefault();
  window.versions.minimizeApp();
}

document.getElementById('closeButtonWindow').addEventListener('click', closeApp);
document.getElementById('minimizeButtonWindow').addEventListener('click', minimizeApp);
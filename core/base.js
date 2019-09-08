const {remote} = require('electron');

document.getElementById('close').addEventListener('click', closeWindow)
document.getElementById('minimize').addEventListener('click', minimizeWindow)
document.getElementById('maxmize').addEventListener('click', maximizeWindow)

function closeWindow(){
	remote.getCurrentWindow().close()
}

function minimizeWindow(){
	remote.getCurrentWindow().minimize()
}

function maximizeWindow(){
	var window = remote.getCurrentWindow()
	window.isMaximized() ? window.unmaximize() : window.maximize()
}
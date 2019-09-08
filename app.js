const {app, BrowserWindow, globalShortcut} = require('electron');
const url = require('url');

const basepath = 'file://'+__dirname+'/';

var win = null;	//make win as global

function boot(){
	var winConfig = {
		width: 1000,
		height: 700,
		frame: false,
		webPreferences: { nodeIntegration: true }, //this is for use node in other js file e.g require() 
	};
	win = new BrowserWindow(winConfig);
	win.loadURL(basepath+'index.html');
	// console.log(process.type);

	globalShortcut.register('a+1',function(){	//key winding
		console.log('key a+1 pressed');
	});
}

app.on('ready',boot);


const { app, BrowserWindow, Menu } = require('electron');
require('./app.js')

const path = require('path');
const url = require('url');

//const MainWindow = require('./src/components/main-window/mainWindow')
//const AppTray = require('./src/components/tray/appTray')
//const {menu} = require('./components/main-window/nenu')

process.env.NODE_ENV = 'production'
const isDev = process.env.NODE_ENV !== 'production' ? true : false
const isMac = process.platform === 'darwin' ? true : false

// Set env
//process.env.NODE_ENV = 'production'

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}
let mainWindow
let tray
const createWindow = () => {
  mainWindow = new BrowserWindow({
    frame: false,
    show: false,
    nodeIntegration: false,
    contextIsolation: true
  });
  mainWindow.loadURL('http://localhost:3000')

  const icon = path.join(__dirname, 'src', 'assets', 'icons', 'tray_icon.png')
  //tray = new AppTray(icon)
  console.log('................Electron Up.................');
};
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.allowRendererProcessReuse = true
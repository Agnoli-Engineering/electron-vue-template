import electron from "electron"

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = true

electron.app.allowRendererProcessReuse = false

electron.app.whenReady()
.then(() => {
	let win = new electron.BrowserWindow({
		width: 500,
		height: 400,
		webPreferences: {
			nodeIntegration: true,
			webSecurity: false
		}
	})

	win.loadURL("http://localhost:8080/")
	win.openDevTools()
})

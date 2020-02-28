# xf-samples

## How to run?
1. Run `npm install -g @web-atoms/dev-server`
2. If you are on linux/mac osx, edit `.vscode/tasks.json`, change `${env:APPDATA}` to global npm folder
3. Run All Tasks in VS Tasks
4. Open XFDemo.sln in Visual Studio (You need to do this only once) to build and deploy app on the device
5. Edit `App.xaml.cs`, change `root` url to appropriate network URL on which `@web-atoms/dev-server` is running

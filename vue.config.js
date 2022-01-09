module.exports = {
  pages: {
    index: "src/renderer/main.ts"
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      mainProcessFile: "src/main/index.ts",
      mainProcessWatch: ["src/main"],
      // Use this to change the entry point of your app's render process. default src/[main|index].[js|ts]
      builderOptions: {
        productName: "micro-app",
        appId: "com.electron.micro-app",
        compression: "store",
        directories: {
          output: "build"
        },
        // files: ["dist_electron/**/*"],
        win: {
          icon: "public/icons/icon.ico",
          target: "nsis"
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        }
      }
    }
  }
};

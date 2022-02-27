import path from "path";
import fs from "fs";
import { PluginMeta } from "../../types";
import { PLUGIN_INSTALL_DIR } from "@/main/config/index";
import { readJsonFile } from "@/utils";
import { BrowserWindow } from "electron";

class PluginManager {
  pluginList: Array<PluginMeta> = [];

  installPlugin() {
    // todo
  }

  deletePlugin() {
    // todo
  }

  launchPlugin(plugin: PluginMeta) {
    const pluginDir = path.join(PLUGIN_INSTALL_DIR, plugin.name);

    if (!fs.existsSync(pluginDir)) {
      return;
    }
    const pluginEntry = path.join(PLUGIN_INSTALL_DIR, plugin.name, plugin.main);
    const pluginWin = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });
    pluginWin.loadFile(pluginEntry);
  }

  getPluginsList() {
    if (!fs.existsSync(PLUGIN_INSTALL_DIR)) {
      fs.mkdirSync(PLUGIN_INSTALL_DIR);
    }
    const pluginFolder = fs.readdirSync(PLUGIN_INSTALL_DIR);

    const pluginPkgJsonList = pluginFolder
      .filter(pluginDirName => fs.existsSync(path.join(PLUGIN_INSTALL_DIR, pluginDirName, "package.json")))
      .map(pluginDirName => readJsonFile(path.join(PLUGIN_INSTALL_DIR, pluginDirName, "package.json")));

    return pluginPkgJsonList;
  }
}

export default new PluginManager();

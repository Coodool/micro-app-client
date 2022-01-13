import path from "path";
import fs from "fs";
import { PluginMeta } from "../../types";
import { PLUGIN_INSTALL_DIR } from "@/main/config/index";

class PluginManager {
  pluginList: Array<PluginMeta> = [];

  downloadPlugin() {
    // todo
  }

  deletePlugin() {
    // todo
  }

  getPluginsList() {
    if (!fs.existsSync(PLUGIN_INSTALL_DIR)) {
      fs.mkdirSync(PLUGIN_INSTALL_DIR);
    }
    const pluginFolder = fs.readdirSync(PLUGIN_INSTALL_DIR);

    return pluginFolder;
  }
}

export default new PluginManager();

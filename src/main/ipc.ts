import { ipcMain } from "electron";
import PluginManager from "./plugin-manager";

ipcMain.handle("get-plugin-list", () => {
  return PluginManager.getPluginsList();
});

import { ipcMain } from "electron";
import { IpcMainInvokeEvent } from "electron/main";
import { PluginMeta } from "types";
import PluginManager from "./plugin-manager";

ipcMain.handle("get-plugin-list", () => {
  return PluginManager.getPluginsList();
});

ipcMain.handle("launch-plugin", (event: IpcMainInvokeEvent, plugin: PluginMeta) => {
  return PluginManager.launchPlugin(plugin);
});

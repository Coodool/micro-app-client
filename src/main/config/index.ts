import path from "path";
import pkg from "../../../package.json";

const APP_DATA_DIR = path.join(process.env.APPDATA as string, pkg.name);

// C:\Users\<UserName>\AppData\Roaming
const PLUGIN_INSTALL_DIR = path.join(APP_DATA_DIR, "plugins");

export { APP_DATA_DIR, PLUGIN_INSTALL_DIR };

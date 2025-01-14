import { existsSync, mkdirSync } from "fs";
import env from "@server/env";
import Logger from "@server/logging/Logger";

export const createRootDirForLocalStorage = () => {
  if (env.FILE_STORAGE === "local") {
    const rootDir = env.FILE_STORAGE_LOCAL_ROOT_DIR;
    try {
      if (!existsSync(rootDir)) {
        mkdirSync(rootDir, { recursive: true });
        Logger.debug("utils", `Created ${rootDir} for local storage`);
      }
    } catch (err) {
      Logger.fatal(
        "Couldn't create root dir for local storage of attachments",
        err
      );
    }
  }
};

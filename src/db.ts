import { BaseKeystoneTypeInfo, DatabaseConfig } from "@keystone-6/core/types";
import { DATABASE_URL } from "./config";

export const db: DatabaseConfig<BaseKeystoneTypeInfo> =
  process.env.NODE_ENV === "development"
    ? {
        provider: "sqlite",
        url: "file:./keystone.db",
      }
    : {
        provider: "postgresql",
        useMigrations: true,
        url: DATABASE_URL,
      };

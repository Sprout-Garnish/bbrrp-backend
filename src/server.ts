import { BaseKeystoneTypeInfo, ServerConfig } from "@keystone-6/core/types";
import { PORT } from "./config";

export const server: ServerConfig<BaseKeystoneTypeInfo> = {
  port: PORT,
  healthCheck: true,
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH"],
  },
};

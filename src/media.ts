import { ImagesConfig } from "@keystone-6/core/types";

export const images: ImagesConfig = {
  upload: "local",
  local: {
    storagePath: "public/images",
    baseUrl: "/images",
  },
};

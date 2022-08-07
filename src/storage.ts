import { StorageConfig } from "@keystone-6/core/types";
import {
  accessKeyId,
  baseUrl,
  bucketName,
  region,
  secretAccessKey,
} from "./config";

export namespace Storage {
  export const local: StorageConfig = {
    // Images that use this store will be stored on the local machine
    kind: "local",
    // This store is used for the image field type
    type: "image",
    // The URL that is returned in the Keystone GraphQL API
    generateUrl: (path) => `${baseUrl}/images${path}`,
    // The route that will be created in Keystone's backend to serve the images
    serverRoute: {
      path: "/images",
    },
    // Set serverRoute to null if you don't want a route to be created in Keystone
    // serverRoute: null
    storagePath: "public/images",
  };

  export const s3: StorageConfig = {
    // Files that use this store will be stored in an s3 bucket
    kind: "s3",
    // This store is used for the file field type
    type: "file",
    // The S3 bucket name pulled from the S3_BUCKET_NAME environment variable
    bucketName,
    // The S3 bucket region pulled from the S3_REGION environment variable
    region,
    // The S3 Access Key ID pulled from the S3_ACCESS_KEY_ID environment variable
    accessKeyId,
    // The S3 Secret pulled from the S3_SECRET_ACCESS_KEY environment variable
    secretAccessKey,
    // The S3 links will be signed so they remain private
    signed: { expiry: 5000 },
  };
}

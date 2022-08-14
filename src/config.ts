import crypto from "crypto";

export const {
  // The S3 Bucket Name used to store assets
  S3_BUCKET_NAME: bucketName = "",
  // The region of the S3 bucket
  S3_REGION: region = "",
  // The Access Key ID and Secret that has read/write access to the S3 bucket
  AWS_ACCESS_KEY_ID: accessKeyId = "",
  AWS_SECRET_ACCESS_KEY: secretAccessKey = "",
  // The base URL to serve assets from
  ASSET_BASE_URL: baseUrl = "http://localhost:3000",
} = process.env;

// 3000 is standard for node apps
// Once deployed, Railway will supply this var to your app
//@ts-ignore
export const PORT = parseInt(process.env.PORT) || 3000;

// Postgres DB URL
// The default value here will work if you've installed Postgres on MacOS using brew
// One the app is deployed to Railway, this var will be supplied by the Postgres plugin
export const DATABASE_URL = `postgres://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}`;

// This is not equivalent to `process.env.NODE_ENV === 'development'`.
// Rather, it indicates whether the app is running in development mode,
// even though it is programmatically production mode on server.
export const DEBUG = process.env.DEBUG === "true" || false;

// Default to 30 days
export const SESSION_MAX_AGE =
  //@ts-ignore
  parseInt(process.env.SESSION_MAX_AGE) || 60 * 60 * 24 * 30;

// If the environment doesn't supply a value, default the secret to a secure random string
// This will cause all cookies to be invalidated with each app restart (annoying but better than having a hardcoded default)
// A secure value will be set in your Railway deploy if you use the "Deploy on Railway" button or follow the instructions in the README
export const SESSION_SECRET =
  process.env.SESSION_SECRET ||
  crypto
    .randomBytes(32)
    .toString("base64")
    .replace(/[^a-zA-Z0-9]+/g, "");

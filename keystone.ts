import * as dotenv from "dotenv";

dotenv.config();

const {
  // The base URL to serve assets from
  ASSET_BASE_URL: baseUrl = "http://localhost:3000",
} = process.env;

// Code copied (with some modifications) from the Keystone 6 "with-auth" example
// See.. https://github.com/keystonejs/keystone/tree/master/examples/with-auth

import { config } from "@keystone-6/core";
import { withAuth } from "./src/auth";
import { db } from "./src/db";
import { session } from "./src/session";
import { graphql } from "./src/apollo";
import { lists } from "./src/schema";
import { server } from "./src/server";

// We wrap our config using the withAuth function. This will inject all
// the extra config required to add support for authentication in our system.
export default withAuth(
  config({
    db,
    server,
    lists,
    session,
    graphql,
    storage: {
      local: {
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
      },
      /** more storage */
    },
  })
);

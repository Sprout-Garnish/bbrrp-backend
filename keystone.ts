import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// Code copied (with some modifications) from the Keystone 6 "with-auth" example
// See.. https://github.com/keystonejs/keystone/tree/master/examples/with-auth

import { config } from "@keystone-6/core";
import { withAuth } from "./src/auth";
import { db } from "./src/db";
import { session } from "./src/session";
import { graphql } from "./src/apollo";
import { lists } from "./src/schema";
import { server } from "./src/server";
import { Storage } from "./src/storage";

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
      local: Storage.local,
      s3: Storage.s3,
    },
  })
);

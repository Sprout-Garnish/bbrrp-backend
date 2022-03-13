// Code copied (with some modifications) from the Keystone 6 "with-auth" example
// See.. https://github.com/keystonejs/keystone/tree/master/examples/with-auth

import { config } from "@keystone-6/core";
import { lists } from "./src/schemas";
import { PORT } from "./src/config";
import { withAuth } from "./src/auth";
import { db } from "./src/db";
import { session } from "./src/session";
import { graphql } from "./src/apollo";

// We wrap our config using the withAuth function. This will inject all
// the extra config required to add support for authentication in our system.
export default withAuth(
  config({
    db,
    server: { port: PORT },
    lists,
    // We add our session configuration to the system here.
    session,
    graphql,
  })
);

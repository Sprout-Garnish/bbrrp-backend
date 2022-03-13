// Stateless sessions will store the listKey and itemId of the signed-in user in a cookie.
// This session object will be made available on the context object used in hooks, access-control,
// resolvers, etc.

import { statelessSessions } from "@keystone-6/core/session";
import { SESSION_MAX_AGE, SESSION_SECRET } from "./config";

export const session = statelessSessions({
  maxAge: SESSION_MAX_AGE,
  // The session secret is used to encrypt cookie data (should be an environment variable)
  secret: SESSION_SECRET,
});

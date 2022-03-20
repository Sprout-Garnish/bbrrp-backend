// createAuth configures signin functionality based on the config below. Note this only implements
// authentication, i.e signing in as an item using identity and secret fields in a list. Session
// management and access control are controlled independently in the main keystone config.

import { createAuth } from "@keystone-6/auth";

export const { withAuth } = createAuth({
  // This is the list that contains items people can sign in as
  listKey: "User",
  // The identity field is typically a username or email address
  identityField: "email",
  // The secret field must be a password type field
  secretField: "password",
  // initFirstItem turns on the "First User" experience, which prompts you to create a new user
  // when there are no items in the list yet
  initFirstItem: {
    // These fields are collected in the "Create First User" form
    fields: ["name", "email", "password", "phone"],
  },
  sessionData: "isAdmin",
});

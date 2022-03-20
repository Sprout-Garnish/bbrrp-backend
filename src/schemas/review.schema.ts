import { list } from "@keystone-6/core";
import {
  checkbox,
  integer,
  relationship,
  text,
  timestamp,
} from "@keystone-6/core/fields";
import { isAllowedToModify, isSignedIn } from "../auth/access";

const Review = list({
  access: {
    item: {
      create: isSignedIn,
      update: isAllowedToModify((item) => item.userId),
      delete: isAllowedToModify((item) => item.userId),
    },
  },
  fields: {
    user: relationship({ ref: "User.reviews", many: false }),
    images: relationship({ ref: "Image", many: true }),
    timestamp: timestamp({
      defaultValue: { kind: "now" },
      db: { updatedAt: true },
    }),
    edited: checkbox({ defaultValue: false }),
    title: text({ validation: { isRequired: true, length: { max: 100 } } }),
    content: text({ validation: { isRequired: true, length: { max: 1000 } } }),
    likes: integer({ defaultValue: 0 }),
    restaurant: relationship({ ref: "Restaurant.reviews", many: false }),
  },
});

export default Review;

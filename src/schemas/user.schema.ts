import { list } from "@keystone-6/core";
import {
  checkbox,
  password,
  relationship,
  select,
  text,
} from "@keystone-6/core/fields";
import { isAllowedToModify } from "../auth/access";

type Role = "Customer" | "Owner";

const User = list({
  access: {
    item: {
      create: () => true,
      update: isAllowedToModify((item) => item.id),
      delete: isAllowedToModify((item) => item.id),
    },
  },
  fields: {
    name: text({ validation: { isRequired: true, length: { max: 10 } } }),
    nickname: text({ validation: { length: { max: 50 } } }),
    isAdmin: checkbox({ defaultValue: false }),
    phone: text({
      validation: {
        match: {
          regex: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
        },
      },
    }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
      isFilterable: true,
    }),
    password: password({ validation: { isRequired: true } }),
    role: select({
      options: ["Customer", "Owner"] as Role[],
      type: "enum",
      defaultValue: "Customer" as Role,
    }),
    restaurants: relationship({ ref: "Restaurant.owner", many: true }),
    reservations: relationship({ ref: "Reservation.user", many: true }),
    bookmarks: relationship({ ref: "Restaurant", many: true }),
    reviews: relationship({ ref: "Review.user", many: true }),
  },
});

export default User;

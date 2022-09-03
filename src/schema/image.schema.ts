import { list } from "@keystone-6/core";
import { image, text } from "@keystone-6/core/fields";
import { isAllowedToModify, isSignedIn } from "../auth/access";

const Image = list({
  access: {
    item: {
      create: isSignedIn,
      update: isAllowedToModify((item) => item.id),
      delete: isAllowedToModify((item) => item.id),
    },
  },
  fields: {
    name: text({ validation: { isRequired: true, length: { max: 100 } } }),
    description: text({ validation: { length: { max: 1000 } } }),
    image: image({ storage: "s3" }),
  },
});

export default Image;

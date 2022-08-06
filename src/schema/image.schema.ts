import { list } from "@keystone-6/core";
import { image, text } from "@keystone-6/core/fields";
import { Session } from "../auth/access";

const isAllowedToUse = ({ session }: { session: Session }): boolean =>
  session?.data?.isAdmin ?? false;

const Image = list({
  access: {
    operation: {
      query: isAllowedToUse,
      create: isAllowedToUse,
      update: isAllowedToUse,
      delete: isAllowedToUse,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true, length: { max: 100 } } }),
    description: text({ validation: { length: { max: 1000 } } }),
    image: image({ storage: "local" }),
  },
});

export default Image;

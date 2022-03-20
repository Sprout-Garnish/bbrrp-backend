import { list } from "@keystone-6/core";
import { integer, relationship, timestamp } from "@keystone-6/core/fields";
import { isAllowedToModify, isSignedIn } from "../auth/access";

const Reservation = list({
  access: {
    item: {
      create: isSignedIn,
      update: isAllowedToModify((item) => item.userId),
      delete: isAllowedToModify((item) => item.userId),
    },
  },
  fields: {
    /**
     * @info Timestamp can be obtained with the following code:
     *       new Date().toISOString()
     */
    time: timestamp({ validation: { isRequired: true } }),
    reservationFee: integer({ validation: { isRequired: true } }),
    refund: integer(),
    user: relationship({ ref: "User.reservations", many: false }),
    restaurant: relationship({ ref: "Restaurant", many: false }),
  },
});

export default Reservation;

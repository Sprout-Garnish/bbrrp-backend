import { list } from "@keystone-6/core";
import { float, relationship, text } from "@keystone-6/core/fields";
import { isAllowedToModify, isSignedIn } from "../../auth/access";
import { LatLng, location } from "./location";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IRestaurant {
  name: string;
  description: string;
  locationRaw: string;
  location: LatLng;
}

// type Category = "중식" | "양식" | "치킨" | "피자" | "족발";

const Restaurant = list({
  access: {
    item: {
      create: isSignedIn,
      update: isAllowedToModify((item) => item.ownerId),
      delete: isAllowedToModify((item) => item.ownerId),
    },
  },
  fields: {
    name: text({
      validation: { isRequired: true, length: { max: 100 } },
    }),
    description: text({ validation: { length: { max: 1000 } } }),
    locationRaw: text({ validation: { length: { max: 100 } } }),
    location,
    /**
     * @todo Need to change this as select(enum). Need to define categories.
     */
    category: text(),
    // avgRating: float(),
    owner: relationship({ ref: "User.restaurants" }),
    reservationPrice: float({ validation: { isRequired: true } }),
    info: text({ validation: { length: { max: 1000 } } }),
    images: relationship({ ref: "Image", many: true }),
    reviews: relationship({ ref: "Review.restaurant", many: true }),
  },
});
export default Restaurant;

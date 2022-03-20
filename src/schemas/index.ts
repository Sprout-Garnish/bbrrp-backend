import { Lists } from ".keystone/types";
import User from "./user.schema";
import Restaurant from "./restaurant.schema";
import Image from "./image.schema";
import Reservation from "./reservation.scheme";
import Review from "./review.schema";

export const lists: Lists = {
  User,
  Restaurant,
  Image,
  Reservation,
  Review,
};

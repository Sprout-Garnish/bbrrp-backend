import { Session } from "../auth/access";
import { Nullable } from "./types";

export const userId = (session: Nullable<Session>): Nullable<string> => {
  return session?.itemId;
};

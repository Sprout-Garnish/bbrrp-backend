import { userId } from "../utils/helpers";

export type Session = {
  itemId: string; // User Id
  listKey: string;
  /**
   * @description This data can be edited at src/auth/index.ts > ... > sessionData
   */
  data: {
    isAdmin: boolean;
  };
};

type ListAccessArgs = {
  itemId?: string;
  session?: Session;
};

export const isSignedIn = ({ session }: ListAccessArgs) => !!session;

export const isAllowedToModify =
  (selector: (item: any) => any) =>
  ({ session, item }: { session: Session; item: any }) => {
    if (!session) return false;
    if (session.data.isAdmin) return true;
    if (userId(session) !== selector(item)) return false;
    return true;
  };

export const isAllowedToUse = ({ session }: { session: Session }): boolean =>
  session?.data?.isAdmin ?? false;

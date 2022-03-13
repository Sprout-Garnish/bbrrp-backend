import { GraphQLConfig } from "@keystone-6/core/types";
import { DEBUG } from "./config";
import { Optional } from "./utils/types";

export const graphql: Optional<GraphQLConfig> = DEBUG
  ? {
      debug: true,
      playground: true,
      apolloConfig: {
        introspection: true,
      },
    }
  : undefined;

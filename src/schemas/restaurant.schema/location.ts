import { graphql } from "@keystone-6/core";
import { virtual } from "@keystone-6/core/fields";

export interface LatLng {
  lat: number;
  lng: number;
}

export const location = virtual({
  field: graphql.field({
    type: graphql.object<LatLng>()({
      name: "location",
      fields: {
        lat: graphql.field({ type: graphql.Float }),
        lng: graphql.field({ type: graphql.Float }),
      },
    }),
    /**
     * @param {IRestaurant} item
     * @returns {LatLng}
     */
    resolve(item: any) {
      const { lat, lng }: LatLng = JSON.parse(item.locationRaw);
      return {
        lat,
        lng,
      };
    },
  }),
  ui: {
    query: "{ lat lng }",
  },
});

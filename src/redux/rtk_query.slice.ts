import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://wft-geo-db.p.rapidapi.com/v1/geo";

interface CityType {
  data: [
    {
      city: string;
      country: string;
      countryCode: string;
      length: number;
      latitude: number;
      longitude: number;
    }
  ];
}

export const cityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    headers: {
      "X-RapidAPI-Key": "2ae60f98bbmsh199cc38068f0a1fp12a448jsnbd245e024ecf",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  }),
  endpoints: (build) => ({
    getCityCode: build.query<CityType, unknown>({
      query: (name) => `/cities?namePrefix=${name}`,
    }),
  }),
});

export const { useGetCityCodeQuery } = cityApi;

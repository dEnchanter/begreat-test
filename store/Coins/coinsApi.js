import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../api";

export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: baseQuery,

  endpoints: (builder) => ({
    timeFrame: builder.query({
      query: (id) => ({
        url: `/ca/SOLUSDT?tf[]=${id}`,
        method: "GET",
        // body,
      }),
    }),
    searchCoins: builder.query({
      query: (coinName) => ({
        url: `/rf/${coinName}USDT?tf[]=60`,
        method: "GET",
        // body,
      }),
    }),
 
  }),
});

export const {

  useTimeFrameQuery,
  useSearchCoinsQuery
} = coinsApi;

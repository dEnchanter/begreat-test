import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../api";

export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: baseQuery,

  endpoints: (builder) => ({
    timeFrame: builder.query({
      query: ({id,coinName}) => ({
        url: `/ca/${coinName}USDT?tf[]=${id}`,
        // url: `/ca/${coinName}USDT?tf[]=${id}`,
        method: "GET",
        // body,
      }),
    }),
    searchCoins: builder.query({
      query: ({coinName,timeLeft}) => ({
        // url: `/rf/SOLUSDT?tf[]=60`,
        url: `/rf/${coinName}USDT?tf[]=${timeLeft}`,
        method: "GET",
        // body,
      }),
    }),
    searchCoinPrice: builder.query({
      query: ({coinName,id}) => ({
        url: `/ham/${coinName}USDT?tf[]=${id}`,
        //url: `/ham/${coinName}USDT?tf[]=60`,
        method: "GET",
        // body,
      }),
    }),

    userLoginGoogleAuth: builder.mutation({
      query: (body) => ({
        url: "users/signinwithgoogle",
        method: "POST",
        body,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (body) => ({
        url: "/passwordreset",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {

  useTimeFrameQuery,
  useSearchCoinsQuery,
  useSearchCoinPriceQuery,
  useUserLoginGoogleAuthMutation,useForgetPasswordMutation
} = coinsApi;

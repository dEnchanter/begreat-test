import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../api";
import { getUserDataS, getWatchlist } from "../../helper";

const token = getUserDataS();
const createWatchlistLocal = getWatchlist();

export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: baseQuery,
  tagTypes: ["Watchlist"],

  endpoints: (builder) => ({
    timeFrame: builder.query({
      query: ({id, coinName}) => ({
        url: `${token.userId}/ca/${coinName}USDT?tf[]=${id}`,
        method: "GET",
      }),
      providesTags: ["Watchlist"],
    }),
    searchCoins: builder.query({
      query: ({coinName,timeLeft}) => ({
        url: `${token.userId}/rf/${coinName}USDT?tf[]=${timeLeft}`,
        method: "GET",
      }),
      providesTags: ["Watchlist"],
    }),
    getAllAsset: builder.query({
      query: () => ({
        url: `/allassets`,
        method: "GET",
      }),
      providesTags: ["Watchlist"],
    }),
    searchCoinPrice: builder.query({
      query: ({coinName, id}) => ({
        url: `${token.userId}/ham/${coinName}USDT?tf[]=${id}`,
        method: "GET",
      }),
      providesTags: ["Watchlist"],
    }),
    addToWatchList: builder.mutation({
      query: (payload) => (
        {
          url: `${token.userId}/watchlist/${payload.asset}`,
          body: {
            watchlistName: `${payload.createWatchlist}`,
          },
          method: "POST",
        }),
      invalidatesTags: ["Watchlist"],
    }),
    createWatchlistHolder: builder.mutation({
      query: (payload) => (
        {
          url: `${token.userId}/watchlist/create`,
          body: {
            watchlistName: `${payload}`,
          },
          method: "POST",
        }),
      invalidatesTags: ["Watchlist"],
    }),
    removeAssetsFromWatchlist: builder.mutation({
      query: (payload) => (
        {
          url: `${token.userId}/watchlist/removeassets`,
          body: {
            watchlistName: `${payload}`,
          },
          method: "DELETE",
        }),
      invalidatesTags: ["Watchlist"],
    }),
    DeleteWatchlist: builder.mutation({
      query: (payload) => (
        {
          url: `${token.userId}/watchlist/removewatchlist`,
          body: {
            watchlistName: `${payload}`,
          },
          method: "DELETE",
        }),
      invalidatesTags: ["Watchlist"],
    }),
    removeFromWatchList: builder.mutation({
      query: (payload) => ({
        url: `${token.userId}/watchlist/${payload?.asset.split('/').join('')}`,
        body: {
          watchlistName: `${payload.createWatchlist}`,
        },
        method: "DELETE",
      }),
      invalidatesTags: ["Watchlist"],
    }),
    getAllWatchList: builder.query({
      query: ({ sortNumber, pulse, shift, wltf, createWatchlist }) => {

        const pulseParams = Array.isArray(pulse) ? pulse.map((val) => `pulse[]=${val}`).join('&') : '';
        const shiftParams = Array.isArray(shift) ? shift.map((val) => `shift[]=${val}`).join('&') : '';

        const defaultPulse = `pulse[]=1`;	
        const defaultShift = `shift[]=2`;

        // if (createWatchlist === localStorage.getItem("createWatchlist")) {
        //   return null;
        // }

        if (wltf !== 1) {
          return {
            url: `${token.userId}/watchlist/${createWatchlist}/${sortNumber}?${pulseParams || defaultPulse}&${shiftParams || defaultShift}&wltf=${wltf}`,
            method: "GET",
          } 
        } else {
          return {
            url: `${token.userId}/watchlist/${createWatchlist}/${sortNumber}?${pulseParams || defaultPulse}&${shiftParams || defaultShift}`,
            method: "GET",
          } 
        }
      },
      providesTags: ["Watchlist"],
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
  useGetAllAssetQuery,
  useSearchCoinPriceQuery,
  useAddToWatchListMutation,
  useCreateWatchlistHolderMutation,
  useRemoveAssetsFromWatchlistMutation,
  useDeleteWatchlistMutation,
  useRemoveFromWatchListMutation,
  useGetAllWatchListQuery,
  useUserLoginGoogleAuthMutation,
  useForgetPasswordMutation
} = coinsApi;

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

    updateUser: builder.mutation({
      query: (payload) => ({
        url: "/update-user-profile",
        method: "PATCH",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),

    updateProfilePic: builder.mutation({
      query: (payload) => ({
        url: "/user/change-user-profile-pix",
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
    removeProfilePic: builder.mutation({
      query: (payload) => ({
        url: "/user/remove-profile-pix",
        method: "PUT",
        body: {},
      }),
      transformResponse: (response) => response.data,
    }),
    deleteAccount: builder.mutation({
      query: (payload) => ({
        url: "/user/delete-user-account",
        method: "DELETE",
        body: {},
      }),
      transformResponse: (response) => response.data,
    }),
    //
    addSecurityPin: builder.mutation({
      query: (payload) => ({
        url: "/set-security-pin",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
    changeUserPassword: builder.mutation({
      query: (payload) => ({
        url: "/change-user-password",
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
    // 
    get: builder.mutation({
      query: (payload) => ({
        url: "/set-security-pin",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useAddSecurityPinMutation,
  useUpdateUserMutation,
  useUpdateProfilePicMutation,
  useRemoveProfilePicMutation,
  useDeleteAccountMutation,
  useChangeUserPasswordMutation,
  useTimeFrameQuery
} = coinsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../api";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,

  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (body) => ({
        url: "/user-profile/me",
        method: "GET",
        body,
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
   
    changeUserPassword: builder.mutation({
      query: (payload) => ({
        url: "/change-user-password",
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  
  useUpdateUserMutation,
  useUpdateProfilePicMutation,
  useRemoveProfilePicMutation,
  useDeleteAccountMutation,
  useChangeUserPasswordMutation
} = userApi;

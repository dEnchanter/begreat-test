import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../api/baseUrl";
import { getUserDataS } from "../../helper";
import { baseQuery } from "../api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    userLoginGoogle: builder.mutation({
      query: (body) => ({
        url: "users/signinwithgoogle",
        method: "POST",
        body,
      }),
    }),
    userSignUp: builder.mutation({
      query: (payload) => ({
        url: "users/signup",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
   
    verifyUserAccount: builder.mutation({
      query: (payload) => ({
        url: "/users/verify",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
    verifyPasswordCode: builder.mutation({
      query: (payload) => ({
        url: "/forgotPassword/verify-otp",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
    changePassword: builder.mutation({
      query: (payload) => ({
        url: "/forgotPassword/reset-user-password",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
    resendPassword: builder.mutation({
      query: (payload) => ({
        url: "/users/resendCode",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
    getUser: builder.mutation({
      query: (payload) => ({
        url: `/users/${getUserDataS()?.userId}`,
        method: "get",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
    getUserProfile: builder.query({
      query: (body) => ({
        url: `/users/${getUserDataS()?.userId}`,
        method: "GET",
        body,
      }),
    }),
    updateUserProfile: builder.mutation({
      query: (body) => ({
        url: `/users/${getUserDataS()?.userId}/updateprofile`,
        method: "POST",
        body,
      }),
    }),
    updateUserEmail: builder.mutation({
      query: (body) => ({
        url: `/users/${getUserDataS()?.userId}/updateemail`,
        method: "POST",
        body,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (body) => ({
        url: `/users/${getUserDataS()?.userId}/passwordreset`,
        method: "POST",
        body,
      }),
      skip: ({ body }) => body?.id, // replace with your custom condition

    }),
    subscribe: builder.mutation({
      query: (body) => ({
        url: `/${getUserDataS()?.userId}/order/checkout
        `,
        method: "POST",
        body,
      }),
      skip: ({ body }) => body?.subscribePlanId, // replace with your custom condition

    }),
  }),
});

export const {
  useUserLoginGoogleMutation,
  useUserSignUpMutation,
  
  useVerifyPasswordCodeMutation,
  useChangePasswordMutation,
  useResendPasswordMutation,
  useVerifyUserAccountMutation,
  useGetUserMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUpdateUserEmailMutation,
  useForgetPasswordMutation,
  useSubscribeMutation
  
} = authApi;

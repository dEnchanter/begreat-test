import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../api/baseUrl";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (body) => ({
        url: "/signin",
        method: "POST",
        body,
      }),
    }),
    userSignUp: builder.mutation({
      query: (payload) => ({
        url: "/signup",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response) => response.data,
    }),
    forgetPassword: builder.mutation({
      query: (payload) => ({
        url: "/forgotPassword/initiate-reset-pwd",
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
  }),
});

export const {
  useUserLoginMutation,
  useUserSignUpMutation,
  useForgetPasswordMutation,
  useVerifyPasswordCodeMutation,
  useChangePasswordMutation,
  useResendPasswordMutation,
  useVerifyUserAccountMutation
} = authApi;

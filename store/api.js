import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helper";
import { BASE_URL } from "./api/baseUrl";

// Create our baseQuery instance
export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getToken();

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });
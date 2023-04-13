import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./api/baseUrl";
import { getToken } from "../helper";

// Create our baseQuery instance
export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    // alert(getToken())
    const token = getToken()?.split('Bearer ')?.join("");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

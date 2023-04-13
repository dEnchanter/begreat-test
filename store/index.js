import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { authSlice } from "./auth";
import { authApi } from "./auth/authApi";
import { userApi } from "./User/userApi";
import { coinsApi } from "./Coins/coinsApi";
import { getToken } from "../helper";


const result = getToken()?.split('Bearer ').join("");

export const store = configureStore({
  preloadedState: result ? { auth: result } : undefined,
  reducer: {
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [coinsApi.reducerPath]: coinsApi.reducer,
    
    // [managerApi.reducerPath]: managerApi.reducer,
    // [adminApi.reducerPath]: adminApi.reducer,
    // managers: mangerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      coinsApi.middleware,
     
    ),
});

export default store
// setupListeners(store.dispatch);

import { createSlice ,current} from "@reduxjs/toolkit";
import { DeleteAuthTokenMaster, getAuthToken, setAuthToken } from "../../helper";
import { userLogin } from "./authAction";

const initialState = {
  loading: false,
  isLoggedIn: false,
  userInfo: {}, // for user object
  // userToken: getAuthToken(), // for storing the JWT
  error: null,
  success: false, 
  
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state){
        DeleteAuthTokenMaster('begreatFinace:accesskey') // deletes token from storage
        DeleteAuthTokenMaster('begreatFinace:user') // deletes token from storage
        state.loading = false
        state.userInfo = null
        state.userToken = null
        state.error = null
        state.isLoggedIn =false;
        // ...logout reducer
        
      },
      setCredentials: (state, { payload }) => {
        state.userInfo = payload
       
      },
      googleAuth(state){
       
        state.loading = false
        state.userInfo = {name:'Google Users'}
        
        // state.error = null
        state.isLoggedIn =true;
        // ...logout reducer
        
      },

      loginTest:(state)=>{
       // console.log(state,'userInfo1')
        state.loading=false
      },
     clearState:(state)=>{

     }
 
  },
  extraReducers: {
    //login User
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.isLoggedIn =false;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
       
      state.loading = false;
      state.isLoggedIn =true;
      state.userInfo = payload?.user;
      // state.userToken = payload.accessToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      
      state.loading = false;
      state.error = payload||'Oops, something went wrong, try again later';
      state.isLoggedIn =false;
    },
  },
});
export const {googleAuth, logout,setCredentials,loginTest,addCount,removeCount} = authSlice.actions;
export default authSlice.reducer;

// store/reducers/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  confirmation: any;
  error: string | null;
  isAuthenticated: boolean;
  isLoading:boolean
  isLoading1:boolean,
  accessToken: string | null,
  errors: string | null,
 
}

const initialState: AuthState = {
  confirmation: null, 
  error: null,
  isAuthenticated: false,
  isLoading:false,
  isLoading1:false,
  accessToken: null,
  errors: null,
  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    sendOTPSuccess(state, action: PayloadAction<any>) {
      state.confirmation = action.payload;
      state.error = null;
    },
  
    
    sendOTPFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    verifyOTPSuccess(state) {
      state.isAuthenticated = true;
      state.error = null;
    },
    verifyOTPFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    startLoading(state) {
      state.isLoading = true;
      state.isLoading1 = true;
    },
    stopLoading(state) {
      state.isLoading = false;
      state.isLoading1 = false;
    },
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
      state.errors = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.errors = action.payload;
      state.accessToken = null;
    },
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
    // clearUser: (state) => {
    //   state.user = null;
    // },
  },
});

export const {
  sendOTPSuccess,
  sendOTPFailure,
  verifyOTPSuccess,
  verifyOTPFailure,
  startLoading, 
  stopLoading,
  setAccessToken,
  setError,
  // setUser,
  // clearUser
} = authSlice.actions;

export default authSlice.reducer;

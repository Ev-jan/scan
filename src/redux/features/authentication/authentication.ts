import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface AuthState {
  login: string | null;
  JWT: string | null;
  expire: string | null;
}

const initialState: AuthState = {
  login: null,
  JWT: null,
  expire: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { login, JWT, expire } }: PayloadAction<{login: string; JWT: string, expire: string }>) => {
      state.login = login;
      state.JWT = JWT;
      state.expire = expire;
    },
    clearCredentials: (state) => {
      state.login = null
      state.JWT = null
      state.expire = null
    },
  },
});



export const {
  clearCredentials,
  setCredentials
} = authSlice.actions;

export default authSlice.reducer;






import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types";
import { getFakeUserName } from "../../../helpers";

interface profileState {
  user: IUser | null;
  usedCompanyCount: number | null;
  companyLimit: number | null;
}

const initialState: profileState = {
  user: null,
  usedCompanyCount: null,
  companyLimit: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserData: (
      state,
      {
        payload: { login },
      }: PayloadAction<{
        login: string;
      }>
    ) => {
      state.user = getFakeUserName(login);
    },
    setAccountData: (
      state,
      {
        payload: { usedCompanyCount, companyLimit },
      }: PayloadAction<{
        usedCompanyCount: number;
        companyLimit: number;
      }>
    ) => {
      state.usedCompanyCount = usedCompanyCount;
      state.companyLimit = companyLimit;
    },
    clearProfileData: (state) => {
      state.user = null;
      state.usedCompanyCount = null;
      state.companyLimit = null;
    }
  },
});

export const { setUserData, setAccountData, clearProfileData } = profileSlice.actions;

export default profileSlice.reducer;


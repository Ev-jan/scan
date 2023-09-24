
import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { THistogramTransform } from "../../../types";
import { getHistogramsAsync } from "../../api";


interface HistogramState {
  histograms: THistogramTransform,
  status: "idle" | "loading" | "failed" | "success",
  error: string | null,
}
const initialState: HistogramState = {
  histograms: [],
  status: "idle",
  error: null
}

const HistogramSlice = createSlice({
  name: "histogram",
  initialState,
  reducers: {
    resetHistogramState: () => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(
      getHistogramsAsync.pending, (state) => {
        state.status = "loading";
      }
    )
    .addCase(
      getHistogramsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message !== undefined ? action.error.message : null;

      }
    )
    .addCase(
      getHistogramsAsync.fulfilled, (state, action: PayloadAction<THistogramTransform>) => {
        state.status = "success";
        state.histograms = action.payload;
        console.log(state.histograms, state.status);
      }
    )
  }
});

export const { resetHistogramState } = HistogramSlice.actions;
export default HistogramSlice.reducer;

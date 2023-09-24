import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TReqDocIds, TDocsToShow } from "../../../types";
import {
  getPublicationsAsync,
  getPublicationIdsAsync,
  setCurrentPageIdsAsync,
} from "../../api";

interface DocsState {
  docs: TDocsToShow;
  docStatus: "idle" | "loading" | "failed" | "success";
  docError: string | null;
  allDocsShown: boolean;

  publicationIds: TReqDocIds;
  currentPageIds: TReqDocIds;
  pageSize: number;
  currentPage: number;
  idsStatus: "idle" | "loading" | "failed" | "success";
  idsError: string | null;
}
const initialState: DocsState = {
  docs: [],
  docStatus: "idle",
  docError: null,
  allDocsShown: false,

  publicationIds: [],
  currentPageIds: [],
  pageSize: 10,
  currentPage: 0,
  idsStatus: "idle",
  idsError: null,
};

const docSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    resetDocState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPublicationIdsAsync.rejected, (state, action) => {
        state.idsStatus = "failed";
        state.idsError =
          action.error.message !== undefined ? action.error.message : null;
      })
      .addCase(
        getPublicationIdsAsync.fulfilled,
        (state, action: PayloadAction<TReqDocIds>) => {
          state.idsStatus = "success";
          state.publicationIds = action.payload;
        }
      )
      .addCase(getPublicationsAsync.rejected, (state, action) => {
        state.docStatus = "failed";
        state.docError =
          action.error.message !== undefined ? action.error.message : null;
      })
      .addCase(
        getPublicationsAsync.fulfilled,
        (state, action: PayloadAction<TDocsToShow>) => {
          state.docStatus = "success";

          const newDocs = action.payload.filter((doc) => {
            return !state.docs.some((existingDoc) => existingDoc.id === doc.id);
          });
          state.docs = [...state.docs, ...newDocs];
        }
      )
      .addCase(
        setCurrentPageIdsAsync.fulfilled,
        (state, action: PayloadAction<TReqDocIds>) => {
          state.currentPageIds = action.payload;
          const { pageSize, currentPage } = state;
          const startIndex = currentPage * pageSize;
          const endIndex = startIndex + pageSize;

          if (endIndex > state.currentPageIds.length) {
            state.allDocsShown = true;
          } else {
            state.currentPage += 1;
          }
        }
      );
  },
});
export const {
  resetDocState
} = docSlice.actions;
export default docSlice.reducer;

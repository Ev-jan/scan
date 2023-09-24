import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";


type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// authSlice selector

export const selectLogin = (state: RootState) => state.auth.login;

// profileSlice selectors

export const selectUser = (state: RootState) => state.profile.user;

// profileSlice selectors

export const selectUsedCompanyCount = (state: RootState) =>
  state.profile.usedCompanyCount;
export const selectCompanyLimit = (state: RootState) => state.profile.companyLimit;

// histogramSlice selectors

export const selectHistograms = (state: RootState) => state.histogram.histograms;
export const selectHistogramStatus = (state: RootState) => state.histogram.status;
export const selectHistogramError = (state: RootState) => state.histogram.error;

// documentsSlice selectors

export const selectPublicationIds = (state: RootState) =>
  state.documents.publicationIds;

export const selectDocs = (state: RootState) => state.documents.docs;
export const selectDocStatus = (state: RootState) => state.documents.docStatus;
export const selectPageSize = (state: RootState) => state.documents.pageSize;
export const selectDocError = (state: RootState) => state.documents.docError;
export const selectAllDocsShown = (state: RootState) => state.documents.allDocsShown;





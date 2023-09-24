import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import apiConfig from "./apiConfig";
import type { RootState } from "./store";
import {
  TResEventFilter,
  TResHistogram,
  TReqObjSearchData,
  TReqDocIds,
  TResDocuments,
  TResLogin,
  THistogramTransform,
  TResDocIDs,
} from "../types";
import { ResHistogramToArray, ReqDocIds, DocsToShow } from "../schemas";

const baseQuery = fetchBaseQuery({
  baseUrl: apiConfig.baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.JWT;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    return headers;
  },
});

export const scanApi = createApi({
  reducerPath: "scanApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<TResLogin, { login: string; password: string }>({
      query: ({ login, password }) => ({
        url: apiConfig.endpoints.account.login,
        method: "POST",
        body: { login, password },
      }),
    }),
    getAccountInfo: builder.query<TResEventFilter, void>({
      query: () => apiConfig.endpoints.account.info,
    }),
  }),
});

export const { useLoginMutation, useGetAccountInfoQuery } = scanApi;

export const getHistogramsAsync: AsyncThunk<
  THistogramTransform,
  TReqObjSearchData,
  NonNullable<unknown>
> = createAsyncThunk(
  "histogram/getObjectSearchHistograms",
  async (formData: TReqObjSearchData, thunkAPI) => {
    const { JWT } = (thunkAPI.getState() as RootState).auth;
    try {
      const response = await fetch(
        `${apiConfig.baseUrl}${apiConfig.endpoints.objectsearch.histograms}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JWT}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ...formData }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }
      const data: { data: TResHistogram[] } = await response.json();

      if (Array.isArray(data.data) && data.data.length === 0) {
        return thunkAPI.fulfillWithValue([]);
      }

      const parsedData = ResHistogramToArray.parse(data.data);
      return parsedData;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message });
    }
  }
);

export const getPublicationIdsAsync: AsyncThunk<
  TReqDocIds,
  TReqObjSearchData,
  NonNullable<unknown>
> = createAsyncThunk(
  "documents/getPublicationIds",
  async (data: TReqObjSearchData, thunkAPI) => {
    const { JWT } = (thunkAPI.getState() as RootState).auth;
    try {
      const response = await fetch(
        `${apiConfig.baseUrl}${apiConfig.endpoints.objectsearch.objectsearch}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JWT}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ...data }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData);
        return thunkAPI.rejectWithValue(errorData);
      }

      const ResDocIds: TResDocIDs = await response.json();
      const parsedData = ReqDocIds.parse(ResDocIds);
      return parsedData;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: (error as Error).message });
    }
  }
);

export const setCurrentPageIdsAsync = createAsyncThunk(
  "documents/setCurrentPageIds",
  async (_, thunkAPI) => {
    const state = (thunkAPI.getState() as RootState).documents;
    const { pageSize, publicationIds, currentPage } = state;
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPageIds = publicationIds.slice(startIndex, endIndex);
    return currentPageIds;
  }
);

export const getPublicationsAsync = createAsyncThunk(
  "documents/getPublications",
  async (_, thunkAPI) => {
    const { JWT } = (thunkAPI.getState() as RootState).auth;
    const { currentPageIds } = (thunkAPI.getState() as RootState).documents;
    const { idsStatus } = (thunkAPI.getState() as RootState).documents;
    if (idsStatus === "success" && currentPageIds.length !== 0) {
      try {
        const response = await fetch(
          `${apiConfig.baseUrl}${apiConfig.endpoints.documents.documents}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${JWT}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ ids: currentPageIds }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error(errorData);
          return thunkAPI.rejectWithValue(errorData);
        }

        const data: TResDocuments = await response.json();
        const parsedData = DocsToShow.parse(data);
        return parsedData;
      } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue({ error: (error as Error).message });
      }
    } else return thunkAPI.rejectWithValue({ error: "No ids to fetch" });
  }
);

import { z } from "zod";
import {
  ResLoginSchema,
  EventFiltersInfoSchema,
  SearchFormDataSchema,
  FormToSearchObjReq,
  ResDocIdsSchema,
  ResDocArraySchema,
  ResHistogramToArray,
  ReqDocIds,
  DocsToShow,
  ScanDocSchema,
} from "./schemas";

export const Tariff = {
  beginner: "beginner",
  pro: "pro",
  business: "business",
} as const;

export const publicationType = {
  isTechNews: "Технические новости",
  isAnnouncement: "Анонс",
  isDigest: "Сводка"
} as const;

export type NavItem = {
  label: string;
  url: string;
};

export type TLoginError = {
data: {
  errorCode: string, 
  message: string,
}
status: number;
}

export interface IUser {
  name: string;
  image: string;
  tariff: keyof typeof Tariff;
}

export type TResLogin = z.infer<typeof ResLoginSchema>;
export type TResEventFilter = z.infer<typeof EventFiltersInfoSchema>;
export type TSearchFormData = z.infer<typeof SearchFormDataSchema>;
export type TReqObjSearchData = z.infer<typeof FormToSearchObjReq>;

export type TResHistogram = {
  data: {
    data: {
      date: string;
      value: number;
    }[];
    histogramType: string;
  }[];
};
export type THistogramTransform = z.infer<typeof ResHistogramToArray>;

export type TResDocIDs = z.infer<typeof ResDocIdsSchema>;

export type TReqDocIds = z.infer<typeof ReqDocIds>;
export type TResDocuments = z.infer<typeof ResDocArraySchema>;
export type TDocsToShow = z.infer<typeof DocsToShow>;
export type TScanDoc = TDocsToShow[number];
export type TAttributes = z.infer<typeof ScanDocSchema>["attributes"];
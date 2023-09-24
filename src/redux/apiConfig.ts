 const apiConfig = {
  baseUrl: "https://gateway.scan-interfax.ru/api/v1",
  endpoints: {
    account: {
      info: "/account/info",
      login: "/account/login",
    },
    objectsearch: {
      histograms: "/objectsearch/histograms",
      objectsearch: "/objectsearch",
    },
    documents: {
      documents: "/documents",
    },
  },
} as const;

export default apiConfig;
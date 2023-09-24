import { z } from "zod";
import {
  formatDate,
  formatWordCount,
  getPublicationType,
  isPhoneNumber,
  parsedImgUrl,
  parsedXML,
} from "./helpers";

// validate user's credentials on sign in

export const SignInFormSchema = z.object({
  login: z
    .string({ required_error: "Введите логин" })
    .superRefine((value, ctx) => {
      if (value.startsWith("+")) {
        if (value[1] && +value[1] !== 7) {
          console.log(value[1]);
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Только номера c кодом +7",
          });
        }
        if (value.length !== 12 || !isPhoneNumber(value)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Введите корректные данные",
          });
        }
      } else {
        if (value.length < 3) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Введите корректные данные",
          });
        }
      }
    }),
  password: z
    .string({ required_error: "Введите пароль" })
    .nonempty()
    .min(7, "Пароль должен быть не менее 7 знаков")
    .superRefine((value, ctx) => {
      if (/\s/.test(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Пароль не должен содержать пробелы",
        });
      }
    }),
});

// validate responses from login and eventFilter endpoints

export const ResLoginSchema = z.object({
  accessToken: z.string(),
  expire: z.string(),
});

export const EventFiltersInfoSchema = z.object({
  eventFiltersInfo: z.object({
    usedCompanyCount: z.number(),
    companyLimit: z.number(),
  }),
});

// valdiate initial searchform data. At this point, no transformations are done

export const SearchFormDataSchema = z
  .object({
    inn: z
      .string({ required_error: "Введите ИНН" })
      .regex(/^[\s\d]+$/, "Недопустимый символ")
      .superRefine((val, ctx) => {
        const stripSpaceVal = val.replace(/\s/g, "");
        if (stripSpaceVal.length > 10) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Не более 10 цифр",
          });
        }
        if (stripSpaceVal.length < 10) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Не менее 10 цифр",
          });
        }

        const arrNumbers = stripSpaceVal.split("").map(Number);
        let checkSum = 0;
        let n11: number;
        const weight = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
        for (let i = 0; i < arrNumbers.length; i++) {
          checkSum += arrNumbers[i] * weight[i];
        }
        n11 = checkSum % 11;
        if (n11 > 9) {
          n11 = 0;
        }
        if (arrNumbers[9] != n11) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Неверный ИНН",
          });
        }

        if (arrNumbers.every((item) => item === 0)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Неверный ИНН",
          });
        }
      }),

    tonality: z.string(),
    limit: z
      .string({ required_error: "Введите количество" })
      .superRefine((value, ctx) => {
        const num = Number(value);
        if (value) {
          if (isNaN(num)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Некорректное количество",
            });
          }
          if (num < 1) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Некорректное количество",
            });
          }
          if (num > 1000) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Некорректное количество",
            });
          }
          if (num % 1 !== 0) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Некорректное количество",
            });
          }
        }
      }),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
    maxFullness: z.boolean(),
    inBusinessNews: z.boolean(),
    onlyMainRole: z.boolean(),
    onlyWithRiskFactors: z.boolean(),
    excludeTechNews: z.boolean(),
    excludeAnnouncements: z.boolean(),
    excludeDigests: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (!data.startDate || !data.endDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Введите дату",
        path: ["startDate"],
      });
    }
    if (data.startDate && data.endDate) {
      const dateNow = new Date();
      const dateNowYear = dateNow.getFullYear();
      const dateNowMonth = dateNow.getMonth();
      const dateNowDay = dateNow.getDate();
      const dateNowHours = dateNow.getHours();
      const dateNowMinutes = dateNow.getMinutes();
      const dateNowSeconds = dateNow.getSeconds();
      const dateNowMilliseconds = dateNow.getMilliseconds();
      const dateNowFull = new Date(
        dateNowYear,
        dateNowMonth,
        dateNowDay,
        dateNowHours,
        dateNowMinutes,
        dateNowSeconds,
        dateNowMilliseconds
      );
      const dateNowFullNumber = dateNowFull.getTime();
      const startDateNumber = data.startDate.getTime();
      const endDateNumber = data.endDate.getTime();
      if (startDateNumber > dateNowFullNumber) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Дата начала не может быть позже текущей даты",
          path: ["startDate"],
        });
      }
      if (endDateNumber > dateNowFullNumber) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Дата окончания не может быть позже текущей даты",
          path: ["endDate"],
        });
      }
      if (data.endDate < data.startDate || data.startDate > data.endDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Дата окончания не может быть раньше даты начала",
          path: ["endDate"],
        });
      }
    }
  });

// transform initial searchform data to SearchObject request data

export const FormToSearchObjReq = SearchFormDataSchema.transform((data) => ({
  issueDateInterval: {
    startDate: data.startDate?.toISOString(),
    endDate: data.endDate?.toISOString(),
  },
  searchContext: {
    targetSearchEntitiesContext: {
      targetSearchEntities: [
        {
          type: "company",
          sparkId: null,
          entityId: null,
          inn: data.inn.replace(/\s/g, ""),
          maxFullness: data.maxFullness,
          inBusinessNews: data.inBusinessNews,
        },
      ],
      onlyMainRole: data.onlyMainRole,
      tonality: data.tonality,
      onlyWithRiskFactors: data.onlyWithRiskFactors,
      riskFactors: {
        and: [],
        or: [],
        not: [],
      },
      themes: {
        and: [],
        or: [],
        not: [],
      },
    },
    themesFilter: {
      and: [],
      or: [],
      not: [],
    },
  },
  searchArea: {
    includedSources: [],
    excludedSources: [],
    includedSourceGroups: [],
    excludedSourceGroups: [],
  },
  attributeFilters: {
    excludeTechNews: !data.excludeTechNews,
    excludeAnnouncements: !data.excludeAnnouncements,
    excludeDigests: !data.excludeDigests,
  },
  similarMode: "duplicates",
  limit: Number(data.limit),
  sortType: "sourceInfluence",
  sortDirectionType: "desc",
  intervalType: "month",
  histogramTypes: ["totalDocuments", "riskFactors"],
}));

// transform response data from objectSearch/histograms endpoint to a single array of consumable objects

export const ResHistogramToArray = z
  .array(
    z.object({
      data: z.array(
        z.object({
          date: z.string(),
          value: z.number(),
        })
      ),
      histogramType: z.string(),
    })
  )
  .transform((data) => {
    const sortedRisksByDate = data
      .find((item) => item.histogramType === "riskFactors")
      ?.data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });
    const sortedDocsByDate = data
      .find((item) => item.histogramType === "totalDocuments")
      ?.data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });
    let riskPointer = 0;
    let docsPointer = 0;

    const result = [];

    while (
      riskPointer < sortedRisksByDate!.length &&
      docsPointer < sortedDocsByDate!.length
    ) {
      const riskDate = new Date(sortedRisksByDate![riskPointer].date);
      const docDate = new Date(sortedDocsByDate![docsPointer].date);

      if (riskDate < docDate) {
        riskPointer++;
      } else if (riskDate > docDate) {
        docsPointer++;
      } else {
        result.push({
          date: sortedRisksByDate![riskPointer].date,
          docs: sortedDocsByDate![docsPointer].value,
          risks: sortedRisksByDate![riskPointer].value,
        });
        riskPointer++;
        docsPointer++;
      }
    }
    return result;
  });

export const ResDocIdsSchema = z.object({
  items: z.array(
    z.object({
      encodedId: z.string(),
      influence: z.number(),
      similarCount: z.number(),
    })
  ),
});

export const ReqDocIds = ResDocIdsSchema.transform((data) =>
  data.items.map((item) => item.encodedId)
);

// transform arrays of scandoc objects into plain consumption-ready objects

export const ScanDocSchema = z.object({
  id: z.string(),
  issueDate: z.string(),
  url: z.string(),
  source: z.object({
    name: z.string(),
  }),

  title: z.object({
    text: z.string(),
    markup: z.string(),
  }),
  content: z.object({
    markup: z.string(),
  }),
  attributes: z.object({
    isTechNews: z.boolean(),
    isAnnouncement: z.boolean(),
    isDigest: z.boolean(),
    wordCount: z.number(),
  }),
  language: z.string(),
});

type TScanDoc = z.infer<typeof ScanDocSchema>;

const ErrorSchema = z.object({
  errorCode: z.number(),
  errorMessage: z.string(),
});

const OkSchema = z.object({
  ok: ScanDocSchema,
});

const FailSchema = z.object({
  fail: ErrorSchema,
});

const ResDocUnionSchema = z.union([OkSchema, FailSchema]);

export const ResDocArraySchema = z.array(ResDocUnionSchema);

export const DocsToShow = ResDocArraySchema.transform((data) => {
  const resultOk = data.filter(
    (item): item is { ok: TScanDoc } => "ok" in item
  );
  return resultOk.map((item) => {
    const parsedText = parsedXML(item.ok.content.markup);
    const imgSrc = parsedImgUrl(item.ok.content.markup);
    const wordCountString = formatWordCount(item.ok.attributes.wordCount);
    const publicationType = getPublicationType(item.ok.attributes);
    const dateString = formatDate(item.ok.issueDate);

    return {
      id: item.ok.id,
      title: item.ok.title.text,
      sourceUrl: item.ok.url,
      sourceName: item.ok.source.name,
      date: dateString,
      content: parsedText,
      imgUrl: imgSrc,
      wordCountString: wordCountString,
      wordCountNum: item.ok.attributes.wordCount,
      publicationType: publicationType,
    };
  });
});

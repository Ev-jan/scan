import { IUser, TAttributes, publicationType } from "./types";
import parse, {
  Element,
  DOMNode,
  HTMLReactParserOptions,
} from 'html-react-parser';

export const clearSpaces = (phoneNumber: string) => {
  return phoneNumber.replace(/\s/g, "");
};

export const isPhoneNumber = (value: string) => /^\+?\d+$/.test(value);

export const formatPhoneNumber = (phoneNumber: string) => {
  const match = phoneNumber.match(/^(\+\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (!match) {
    return clearSpaces(phoneNumber);
  }
  return `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`;
};

export const handlePhoneOrLoginValue = (value: string) => {
  if (isPhoneNumber(value)) {
    return formatPhoneNumber(value);
  } else return clearSpaces(value);
};

export const getFakeUserName = (login: string): IUser => {
  switch (login) {
    case "sf_student1":
      return {
        name: "Алексей К.",
        image: "/images/user1.png",
        tariff: "beginner",
      };
    case "sf_student2":
      return {
        name: "Ибрагим Ж.",
        image: "/images/user2.png",
        tariff: "pro",
      };
    case "sf_student3":
      return {
        name: "Владимир К.",
        image: "/images/user5.png",
        tariff: "business",
      };
    case "sf_student4":
      return {
        name: "Вальдемар К.",
        image: "/images/user6.png",
        tariff: "beginner",
      };
    case "sf_student5":
      return {
        name: "Дмитрий Д.",
        image: "/images/user1.png",
        tariff: "pro",
      };
    case "sf_student6":
      return {
        name: "Евгений П.",
        image: "/images/user2.png",
        tariff: "business",
      };
    case "sf_student7":
      return {
        name: "Иван Ф.",
        image: "/images/user5.png",
        tariff: "beginner",
      };
    case "sf_student8":
      return {
        name: "Илья С.",
        image: "/images/user6.png",
        tariff: "pro",
      };
    case "sf_student9":
      return {
        name: "Кирилл С.",
        image: "/images/user1.png",
        tariff: "business",
      };
    case "sf_student10":
      return {
        name: "Максим С.",
        image: "/images/user2.png",
        tariff: "beginner",
      };
    default:
      return {
        name: "Пользователь",
        image: "/images/userpic.png",
        tariff: "pro",
      };
  }
};
export function formatNumber(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

export function formatCountString(num: number) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `Найден ${formatNumber(num)} вариант`;
  }
  if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 10 || lastTwoDigits >= 20)
  ) {
    return `Найдено ${formatNumber(num)} варианта`;
  }
  return `Найдено ${formatNumber(num)} вариантов`;
}

export function formatWordCount(num: number) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${formatNumber(num)} слово`;
  }
  if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 10 || lastTwoDigits >= 20)
  ) {
    return `${formatNumber(num)} слова`;
  }
  return `${formatNumber(num)} слов`;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export const parsedXML = (xml: string) => {
  const parser = new DOMParser();
  const prasedString = parser.parseFromString(xml, "text/xml");
  const sentences = prasedString.getElementsByTagName("sentence");
  let formattedText = "";

  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
        if (domNode && domNode instanceof Element && domNode.attribs && domNode.attribs.src) {
            return <></>;
        }
    }
};

  [...sentences].forEach((sentence) => {
    formattedText += sentence.textContent + "\n\n";

  });

  const parsedText = parse(formattedText, options);
  return parsedText
};

export const parsedImgUrl = (xml: string) => {
  const imgStart = xml.indexOf('src="https://storage');
  
  if (imgStart === -1) {
    return null;
  }

  const imgEnd = xml.indexOf('"', imgStart + 'src="'.length);
  const imgSrc = xml.substring(imgStart + 'src="'.length, imgEnd);

  return imgSrc;
};

export const getPublicationType = (attributes: TAttributes) => {
  for (const [key, value] of Object.entries(attributes)) {
    if (value && key in publicationType) {
      return publicationType[key as keyof typeof publicationType];
    }
  }

  return null;
};

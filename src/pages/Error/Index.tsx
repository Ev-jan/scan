import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";


export default function ErrorPage(){

    const error = useRouteError();
    let errorMessage: string;
  
    if (isRouteErrorResponse(error)) {
      errorMessage = error.error?.message || error.statusText;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else {
      console.error(error);
      errorMessage = 'Unknown error';
    }

        return (
            <div className="error-container" style={{minHeight: "100vmin", textAlign: "center"}}>
              <h2>Что-то пошло не так 😢</h2>
              <p>Ошибка: {errorMessage}</p>
              <p>Попробуйте перезагрузить страницу или вернитесь на главную</p>
              <Link to="/">На главную</Link>
            </div>
          );
}
import 'normalize.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Providers } from './redux/provider.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/Error/Index.tsx';
import Main from './pages/Main_/Index.tsx';

import Tariffs from './pages/Tariffs/Index.tsx';
import Faq from './pages/FAQ/Index.tsx';
import Auth from './pages/Auth/Index.tsx';
import CompoundAuthForm from './components/Forms/CompoundAuthForm.tsx';
import Search from './pages/Search/Index.tsx';
import Results from './pages/Results/Index.tsx';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/tariffs",
        element: <Tariffs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/faq",
        element: <Faq />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/auth/signup",
            element: <CompoundAuthForm view='signup' />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/auth/signin",
            element: <CompoundAuthForm view='signin' />,
            errorElement: <ErrorPage />,
          },
        ]
      },
      {
        path: "/results",
        element: <Results />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/search",
        element: <Search />,
        errorElement: <ErrorPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Providers>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </Providers>
  </React.StrictMode>

)

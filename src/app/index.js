import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './app.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Loader from 'Components/Common/Loader';
import Routes from 'routes/index';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

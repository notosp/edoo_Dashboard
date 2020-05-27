import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from 'react-i18next';

import store from './redux/store';
import loading from './components/loading';

import enTranslations from "./locales/en";
import idTranslations from "./locales/id";

const resources = {
    en: { messages: enTranslations },
    id: { messages: idTranslations },
};
const i18n = i18next.use(initReactI18next);
i18n.init({
    react: {
        wait: true,
    },
    resources: resources,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
    ns: ['messages'],
    defaultNS: 'messages',
    fallbackNS: [],
});


const Layout = React.lazy(() => import(`./layouts/${process.env.REACT_APP_LAYOUT || 'moco'}`));

const App = () => (
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <React.Suspense fallback={loading()}>
                <Layout />
            </React.Suspense>
        </Provider>
    </I18nextProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import { makeMainRoutes } from './routes';

import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";

const routes = makeMainRoutes();

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'es',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        es: {
            common: common_es
        },
    },
});



ReactDOM.render(routes,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { render } from 'react-dom';
import rootReducer from './store/store';
import App from './App';
import i18n from './i18n';

// @ts-ignore
const preloadedState = window.__PRELOADED_STATE__

// @ts-ignore
delete window.__PRELOADED_STATE__

const sagaMiddleware = createSagaMiddleware();

// Create Redux store with initial state
const store = configureStore({
	reducer: rootReducer,
	preloadedState,
	middleware: [sagaMiddleware]
});

render(
	<Provider store={store}>
		<I18nextProvider i18n={i18n}>
			<App />
		</I18nextProvider>
	</Provider>,
	document.getElementById('root'),
);

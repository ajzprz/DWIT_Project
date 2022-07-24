import React from 'react';
import {createContext} from "react";

import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux";
import { store } from "./store";
// import makeStore from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const NameContext = createContext()
// const store = makeStore()

root.render(
  <React.StrictMode>
    <ChakraProvider>
    <Provider store={store}>
    <NameContext.Provider value='ajaya'>
      <App />
      </NameContext.Provider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

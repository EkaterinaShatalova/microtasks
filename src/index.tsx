import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./Header";
import Body from "./Body";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <App/>
      <Header title={'HEADER TITLE'}/>
      <Body title={'body title'}/>
    </>
  </React.StrictMode>
);


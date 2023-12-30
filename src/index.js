import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from './routes/Feed';
import Search from './routes/Search';
import Errorpage from './routes/Errorpage';
import Allnews from './routes/Allnews';
import Profile from './routes/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/news",
        element: <Allnews />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

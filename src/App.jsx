import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import RouterApp from "./config/Routers/AppRouter";


import "../src/athi-css/ahti.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { initializeTagManager } from "./gtm";
import usePageTracking from "./usePageTracking";

const initializeClarity = () => {
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "li7af0s03s");
};

const App = () => {
  useEffect(() => {
    // initializeTagManager();
    initializeClarity();
  }, []);
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
};
const TrackedApp = () => {
  // usePageTracking();
  return <RouterApp />;
};
export default App;

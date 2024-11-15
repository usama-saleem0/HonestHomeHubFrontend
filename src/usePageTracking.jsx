// usePageTracking.js
import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
const usePageTracking = () => {
  const loc = useLocation();
  useEffect(() => {
    const unlisten = loc.listen((location) => {
      TagManager.dataLayer({
        dataLayer: {
          event: "pageview",
          page: location.pathname + location.search,
        },
      });
    });
    // Trigger the first pageview manually
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        page: window.location.pathname + window.location.search,
      },
    });
    return () => {
      unlisten();
    };
  }, [loc]);
};
export default usePageTracking;

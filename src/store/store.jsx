import {
  applyMiddleware,
  combineReducers,
  compose,
  configureStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userAuthSlice from "./slice/AuthSlice";
import ThemeSlice from "./slice/themeSlice";
import communitySlice from "./slice/communitySlice";
import newsFeedSlice from "./slice/newsFeedSlice";
import vendorSlice from "./slice/vendorSlice";
import customerSlice from "./slice/customerSlice";
import ChatSlice from "./slice/ChatSlice";
import adminAuthSlice from "./slice/adminAuthSlice";
import paymentSlice from "./slice/paymentSlice";

let reducers = combineReducers({
  authSlice: userAuthSlice,
  theme: ThemeSlice,
  community: communitySlice,
  newsFeed: newsFeedSlice,
  vendorAuth: vendorSlice,
  customerAuth: customerSlice,
  chats: ChatSlice,
  adminAuth: adminAuthSlice,
  payment: paymentSlice,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
  { reducer: reducers },
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

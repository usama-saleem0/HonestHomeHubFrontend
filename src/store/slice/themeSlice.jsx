import { createSlice } from "@reduxjs/toolkit";
import { webTheme } from "../../hooks/styles";

const constants = {
  vendor_theme: "vendor",
  customer_theme: "customer",
};

const initialState = {
  customer: {
    ...webTheme.customer,
    mode: constants.customer_theme,
  },
  vendor: {
    ...webTheme.vendor,
    mode: constants.vendor_theme,
  },
  theme: "vendor",
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme: (state, action) => {
      if (state.theme === constants.vendor_theme) {
        state.theme = constants.customer_theme;
      } else {
        state.theme = constants.vendor_theme;
      }
    },
  },
});

export const { changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;

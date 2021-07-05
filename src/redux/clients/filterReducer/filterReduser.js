import { createReducer } from "@reduxjs/toolkit";
import { doFilter } from "./filterAction";
const filterReducer = createReducer("", {
  [doFilter]: (_, { payload }) => payload,
});
export default filterReducer;

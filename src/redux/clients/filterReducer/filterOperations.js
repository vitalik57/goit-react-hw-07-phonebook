import { doFilter } from "./filterAction";

const doFilterOperations = (value) => (dispatch) => {
  dispatch(doFilter(value));
};

export default doFilterOperations;

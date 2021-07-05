import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import filterReducer from "./clients/filterReducer/filterReduser";
import {
  clientsReducer,
  errorReducer,
  loaderReducer,
} from "./clients/clientsReducer/clientsReducer";

const rootReducer = combineReducers({
  items: clientsReducer,
  filter: filterReducer,
  loader: loaderReducer,
  error: errorReducer,
});

const store = configureStore(
  {
    reducer: {
      contacts: rootReducer,
    },
  },
  { middleware: [...getDefaultMiddleware()] }
);

export default store;

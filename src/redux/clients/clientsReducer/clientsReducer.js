import { createReducer } from "@reduxjs/toolkit";
import {
  addALLClients,
  addClient,
  deleteClient,
  resetError,
  setError,
  setLoading,
} from "./clientsAction";

export const clientsReducer = createReducer([], {
  [addALLClients]: (_, { payload }) => payload,
  [addClient]: (state, { payload }) => [...state, payload],
  [deleteClient]: (state, { payload }) => [
    ...state.filter((el) => el.id !== payload),
  ],
});

export const errorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

export const loaderReducer = createReducer(false, {
  [setLoading]: (state) => !state,
});

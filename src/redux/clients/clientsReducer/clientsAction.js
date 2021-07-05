import { createAction } from "@reduxjs/toolkit";

export const addALLClients = createAction("addALLClients");
export const addClient = createAction("addClient");
export const deleteClient = createAction("deleteClient");

export const setError = createAction("setError");
export const resetError = createAction("resetError");

export const setLoading = createAction("setLoading");

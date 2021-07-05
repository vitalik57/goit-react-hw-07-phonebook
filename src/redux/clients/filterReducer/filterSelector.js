import { createSelector } from "@reduxjs/toolkit";
import { getAllItems } from "../clientsReducer/clientsSelector";

export const getFilter = (state) => state.contacts.filter;

export const getFilterClients = createSelector(
  [getAllItems, getFilter],
  (items, filter) => {
    const formatedFilter = filter?.toLowerCase();
    return items?.filter((contact) =>
      contact.name.toLowerCase().includes(formatedFilter)
    );
  }
);

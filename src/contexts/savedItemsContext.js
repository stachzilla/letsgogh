import React, { useState, createContext, useContext } from "react";

const SavedItemsContext = createContext();

export function useSavedItemsContext() {
  return useContext(SavedItemsContext);
}

export const SavedItemsProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState({});

  const saveItem = (item) => {
    setSavedItems((prevItems) => ({
      ...prevItems,
      [item?.id]: item,
    }));
  };

  const removeItem = (item) => {
    setSavedItems((prevItems) => {
      const { [item.id]: _, ...rest } = prevItems;
      return rest;
    });
  };

  return (
    <SavedItemsContext.Provider value={{ savedItems, saveItem, removeItem }}>
      {children}
    </SavedItemsContext.Provider>
  );
};

import React, { useState, createContext, useContext, useEffect } from "react";

const SavedItemsContext = createContext();

export function useSavedItemsContext() {
  return useContext(SavedItemsContext);
}

export const SavedItemsProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);

  const saveItem = (item) => {
    setSavedItems((prevItems) => {
      // Check if item already exists in the array
      if (!prevItems.some((savedItem) => savedItem.id === item.id)) {
        return [...prevItems, item]; // Add new item to the array
      }
      return prevItems; // Return the same array if item is already saved
    });
  };

  const removeItem = (item) => {
    setSavedItems((prevItems) =>
      prevItems.filter((savedItem) => savedItem.id !== item.id)
    );
  };

  useEffect(() => {
    console.log("saved", savedItems);
  }, [savedItems]);

  return (
    <SavedItemsContext.Provider value={{ savedItems, saveItem, removeItem }}>
      {children}
    </SavedItemsContext.Provider>
  );
};

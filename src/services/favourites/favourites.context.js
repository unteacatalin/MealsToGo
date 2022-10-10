import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(null);
  const { user } = useContext(AuthenticationContext);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    const saveFavourites = async (value, uid) => {
      try {
        if (value !== null) {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        }
      } catch (e) {
        console.log("error storing", e);
      }
    };
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  useEffect(() => {
    const loadFavourites = async (uid) => {
      try {
        const value = await AsyncStorage.getItem(`@favourites-${uid}`);
        if (value !== null) {
          setFavourites(JSON.parse(value));
        } else {
          setFavourites([]);
        }
      } catch (e) {
        console.log("error loading", e);
      }
    };
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

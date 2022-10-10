import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = focused ? "restaurant" : "restaurant-outline";
                } else if (route.name === "RestaurantsList") {
                  iconName = focused ? "restaurant" : "restaurant-outline";
                } else if (route.name === "RestaurantsDetail") {
                  iconName = focused ? "restaurant" : "restaurant-outline";
                } else if (route.name === "Map") {
                  iconName = focused ? "map" : "map-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "settings" : "settings-outline";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={32} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "black",
              headerShown: false,
              tabBarStyle: { height: 64 },
              tabBarLabelStyle: { fontSize: 16 },
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

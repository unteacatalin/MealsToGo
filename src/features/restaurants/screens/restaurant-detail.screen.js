import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utils/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => (
            <List.Icon
              {...props}
              icon="coffee"
              expanded={breakfastExpanded}
              onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            />
          )}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="French Toast" />
          <List.Item title="Pancake" />
          <List.Item title="Breakfast Sandwich" />
          <List.Item title="Smoothie" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => (
            <List.Icon
              {...props}
              icon="hamburger"
              expanded={lunchExpanded}
              onPress={() => setLunchExpanded(!lunchExpanded)}
            />
          )}
        >
          <List.Item title="Pasta Salad" />
          <List.Item title="Chicken Salad" />
          <List.Item title="Tuba Salad" />
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Bean Salad" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon
              {...props}
              icon="food-turkey"
              expanded={dinnerExpanded}
              onPress={() => setDinnerExpanded(!dinnerExpanded)}
            />
          )}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Spaghetti and Meatballs" />
          <List.Item title="Beef Stroganoff" />
          <List.Item title="Shepherd's Pie" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Meatloaf" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => (
            <List.Icon
              {...props}
              icon="liquor"
              expanded={drinksExpanded}
              onPress={() => setDrinksExpanded(!drinksExpanded)}
            />
          )}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Coke Cola" />
          <List.Item title="Wine" />
          <List.Item title="Bear" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

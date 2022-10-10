import React from "react";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacers/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Row,
  Rating,
  Address,
  SectionEnd,
} from "./restaurant-info-card.styles";
import { Favourite } from "../../../components/favourites/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://illocale.ro/wp-content/uploads/2016/06/restaurant-herastrau.jpg",
    ],
    address = "100 Some Random Street",
    isOpenedNow = true,
    rating = 3.8,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={star}
                height={20}
                width={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenedNow && <SvgXml xml={open} height={20} width={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

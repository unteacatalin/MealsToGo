import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacers/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { FadeInView } from "../../../components/animations/fade.animation";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <FadeInView>
        <AvatarContainer>
          <Avatar.Icon
            size={180}
            icon="account-cog-outline"
            backgroundColor="#2182BD"
          />
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favorites"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <SettingsItem
            title="Logout"
            left={(props) => (
              <List.Icon {...props} color="black" icon="location-exit" />
            )}
            onPress={onLogout}
          />
        </List.Section>
      </FadeInView>
    </SafeArea>
  );
};

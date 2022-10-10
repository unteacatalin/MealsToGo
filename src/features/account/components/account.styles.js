import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/background.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  padding: ${(props) => props.theme.space[3]};
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  uppercase: false,
})`
  padding: ${(props) => props.theme.space[1]};
  width: 200px;
`;

export const AuthInput = styled(TextInput).attrs({
  activeUnderlineColor: colors.brand.primary,
})`
  width: 250px;
`;

export const Title = styled(Text)`
  font-size: 30px;
  align-self: center;
`;

export const ErrorContainer = styled(Text)`
  max-width: 250px;
  align-items: center;
  align-self: center;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 30%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;

import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";

import {
  AccountBackground,
  AccountCover,
  AuthButton,
  AccountContainer,
  Title,
  AnimationWrapper,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacers/spacer.component";
import { FadeInView } from "../../../components/animations/fade.animation";

export const AccountScreen = ({ navigation }) => {
  const animation = useRef(null);
  return (
    <AccountBackground resizeMode="cover">
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key={animation}
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/mealstogo.json")}
        />
      </AnimationWrapper>
      <FadeInView>
        <AccountContainer>
          <Title>Meals To Go</Title>
          <Spacer position="top" size="large">
            <AuthButton
              mode="contained"
              onPress={() => navigation.navigate("Login")}
            >
              <AntDesign name="login" size={24} color="white" />
              <View style={{ width: 16, height: 1 }} />
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Login
              </Text>
            </AuthButton>
          </Spacer>
          <Spacer position="top" size="large">
            <AuthButton
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              <AntDesign name="adduser" size={24} color="white" />
              <View style={{ width: 16, height: 1 }} />
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Register
              </Text>
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </FadeInView>
    </AccountBackground>
  );
};

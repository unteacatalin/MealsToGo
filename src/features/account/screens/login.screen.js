import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacers/spacer.component";
import { FadeInView } from "../../../components/animations/fade.animation";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <AccountBackground resizeMode="cover">
      <AccountCover />
      <FadeInView>
        <AccountContainer>
          <Title>Meals To Go</Title>
          <Spacer position="top" size="large">
            <AuthInput
              label="E-mail"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            />
          </Spacer>
          <Spacer position="top" size="large">
            <AuthInput
              label="Password"
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
            />
          </Spacer>
          {error && (
            <Spacer position="top" size="large">
              <ErrorContainer variant="error">{error}</ErrorContainer>
            </Spacer>
          )}
          <Spacer position="top" size="large">
            {!isLoading ? (
              <AuthButton
                mode="contained"
                onPress={() => onLogin(email, password)}
              >
                <AntDesign name="login" size={24} color="white" />
                <View style={{ width: 24, height: 1 }} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  Login
                </Text>
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color={Colors.blue300} />
            )}
          </Spacer>
          <Spacer position="top" size="large">
            <AuthButton mode="contained" onPress={() => navigation.goBack()}>
              <AntDesign name="back" size={24} color="white" />
              <View style={{ width: 16, height: 1 }} />
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Back
              </Text>
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </FadeInView>
    </AccountBackground>
  );
};

import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";
import Btn from "../components/Auth/Btn";

const LOGO_URL =
  "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png";

const Container = styled.View`
  flex: 1;
`;
const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`;
const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

const BtnContainer = styled.View``;

function Welcome({ navigation }) {
  const goToSignUp = () => navigation.navigate("SignUp");
  const goToSignIn = () => navigation.navigate("SignIn");
  return (
    <Container>
      <BlurView
        intensity={40}
        tint="light"
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo source={{ uri: LOGO_URL }} />
        <BtnContainer>
          <Btn onPress={goToSignUp} text={"가입하기"} accent={true} />
          <Btn onPress={goToSignIn} text={"접속하기"} />
        </BtnContainer>
      </BlurView>

      <Image source={require("../assets/loginBG.png")} />
      <StatusBar barStyle="light-content" />
    </Container>
  );
}

export default Welcome;

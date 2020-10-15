import { BlurView } from "expo-blur";
import React from "react";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import { StatusBar } from "react-native";

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
  margin-top: 50px;
  width: 100px;
  height: 100px;
`;

const BtnContainer = styled.View`
  margin-top: 40px;
`;

export default ({ navigation }) => {
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo source={{ uri: LOGO_URL }} />

        <BtnContainer>
          <Btn onPress={goToSignUp} text={"가입하기"} accent={true} />
          <Btn onPress={goToSignIn} text={"접속하기"} />
        </BtnContainer>
      </BlurView>

      <Image source={require("../../assets/loginBG.jpg")} />
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

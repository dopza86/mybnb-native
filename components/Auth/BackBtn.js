import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  padding-left: 20px;
`;
const isAndroid = Platform.OS === "android";

export default () => (
  <Container>
    <Ionicons name={isAndroid ? "md-arrow-back" : "ios-arrow-back"} size={28} />
  </Container>
);

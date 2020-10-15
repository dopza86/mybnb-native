import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";
const Container = styled.View`
  padding-left: 20px;
`;

export default () => (
  <Container>
    <Ionicons name={isAndroid ? "md-arrow-back" : "ios-arrow-back"} size={28} />
  </Container>
);

import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const UserPhoto = styled.Image`
  width: 80px;
  height: 80px;
  margin-bottom:5px
  border-radius: 5px;
  margin-right: 20px;
`;

const UserCard = styled.View`
  background-color: white;
  width: ${width - 80}px;
  height: ${height / 2}px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 0px 20px;

  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Column = styled.View`
  width: 65%;
`;

const UserName = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

const SuperhostContainer = styled.View`
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
  align-items: center;
`;
const SuperhostText = styled.Text`
  font-weight: 500;
  font-size: 15px;
`;

export default ({ user }) => (
  <Container>
    <UserCard>
      <UserPhoto
        source={
          user.avatar
            ? { uri: user.avatar }
            : require("../../../assets/userDefault.jpg")
        }
      />
      <Column>
        <UserName>{user.username}</UserName>

        {user.superhost ? (
          <SuperhostContainer>
            <SuperhostText>슈퍼호스트</SuperhostText>
          </SuperhostContainer>
        ) : (
          <Text>일반유저</Text>
        )}
      </Column>
    </UserCard>
  </Container>
);

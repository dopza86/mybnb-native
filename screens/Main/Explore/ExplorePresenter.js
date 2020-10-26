import React from "react";
import { ActivityIndicator, ScrollView, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
`;

const FakeBar = styled.View`
  height: 40px;
  width: 100%;
  background-color: white;
  border:1px solid black
  margin: 80px 0px 10px 0px;
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
`;
const FakeText = styled.Text`
  font-size: 14px;
  font-weight: 300;
`;

export default ({ rooms }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          <FakeBar>
            <FakeText> 검색 </FakeText>
          </FakeBar>
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{ paddingTop: 30 }}
          >
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                id={room.id}
                isFav={room.is_favs}
                isSuperHost={room.user.superhost}
                photos={room.photos}
                name={room.name}
                price={room.price}
              />
            ))}
            <TouchableOpacity>
              <Text>더보기</Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

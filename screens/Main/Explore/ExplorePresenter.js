import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

export default ({ rooms }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <ScrollView
          style={{ width: "100%", marginTop: 120 }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
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
        </ScrollView>
      )}
    </Container>
  );
};

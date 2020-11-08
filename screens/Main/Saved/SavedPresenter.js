import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
  margin-top: 70px;
  padding: 0px 30px;
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SV = styled.ScrollView``;

const Title = styled.Text`
  font-size: 36px;
  margin-bottom: 10px;
`;

const NoFavs = styled.Text``;

export default ({ rooms }) => (
  <>
    {rooms ? (
      <Container>
        <Title>관심목록 ({rooms.length})</Title>
        <SV
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          {rooms.length !== 0 ? (
            rooms.map((room) => (
              <RoomCard
                key={room.id}
                name={room.name}
                price={room.price}
                photos={room.photos}
                id={room.id}
                isFav={room.is_fav}
                isSuperHost={room.user.superhost}
                roomObj={room}
              />
            ))
          ) : (
            <NoFavs>관심목록이 없습니다</NoFavs>
          )}
        </SV>
      </Container>
    ) : (
      <Container>
        <ActivityIndicator color="black" />
      </Container>
    )}
  </>
);

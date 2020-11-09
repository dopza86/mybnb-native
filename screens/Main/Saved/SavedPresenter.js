import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
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

const LoadMore = styled.View`
  width: 100%;
  padding: 10px 10px;
  align-items: center;
  background-color: #006a70;
  border-radius: 5px;
  margin-bottom: 30px;
`;

const LoadMoreText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export default ({ rooms, increaseFavsPage }) => (
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
          <TouchableOpacity onPress={increaseFavsPage}>
            <LoadMore>
              <LoadMoreText>더보기</LoadMoreText>
            </LoadMore>
          </TouchableOpacity>
        </SV>
      </Container>
    ) : (
      <Container>
        <ActivityIndicator color="black" />
      </Container>
    )}
  </>
);

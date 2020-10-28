import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
`;
const Name = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
`;
const SuperhostContainer = styled.View`
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
`;
const SuperhostText = styled.Text`
  font-weight: 500;
  font-size: 12px;
`;
const PriceContainer = styled.View`
  flex-direction: row;
`;
const PriceNumber = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;
const PriceText = styled.Text`
  font-size: 16px;
`;

const PhotosContainer = styled.View`
  margin-bottom: 10px;
  width: 100%;
  overflow: hidden;
  height: ${height / 4}px;
`;

const SlideImage = styled.Image`
  width:100%
  height:100%
`;

const RoomCard = ({ id, isFav, isSuperHost, photos, name, price }) => (
  <Container>
    <PhotosContainer>
      {photos.length === 0 ? (
        <SlideImage source={require("../assets/roomDefault.jpg")} />
      ) : (
        <Swiper paginationStyle={{ marginBottom: -15 }}>
          {photos.map((photo) => (
            <SlideImage key={photo.id} source={{ uri: photo.file }} />
          ))}
        </Swiper>
      )}
    </PhotosContainer>
    {isSuperHost ? (
      <SuperhostContainer>
        <SuperhostText>슈퍼호스트</SuperhostText>
      </SuperhostContainer>
    ) : null}
    <Name>{name}</Name>
    <PriceContainer>
      <PriceNumber>${price}</PriceNumber>
      <PriceText>/일</PriceText>
    </PriceContainer>
  </Container>
);

RoomCard.prototype = {
  id: Pt.number.isRequired,
  isFav: Pt.bool.isRequired,
  isSuperHost: Pt.bool.isRequired,
  photos: Pt.arrayOf(
    Pt.shape({
      file: Pt.string,
    })
  ),
  name: Pt.string.isRequired,
  price: Pt.number.isRequired,
};

export default RoomCard;

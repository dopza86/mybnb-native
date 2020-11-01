import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions, TouchableOpacity } from "react-native";
import Swiper from "react-native-web-swiper";
import { Ionicons } from "@expo/vector-icons";
import utils from "../utils";
import colors from "../colors";
import { useDispatch } from "react-redux";
import { toggleFav } from "../redux/usersSlice";
import { useNavigation } from "@react-navigation/native";

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
  width: 100%;
  height: 100%;
`;

const Favbutton1 = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const Favbutton = styled.View`
  position: absolute;
  margin-bottom:1px
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const TOpacity = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 10px;
`;

function getIconName(isFav) {
  const isAndroid = utils.isAndroid();
  if (isAndroid) {
    if (isFav) {
      return "md-heart-empty";
    }
    return "md-heart";
  } else {
    if (isFav) {
      return "ios-heart-empty";
    }
    return "ios-heart";
  }
}

const RoomCard = ({ id, isFav, isSuperHost, photos, name, price }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <TouchableOpacity onPress={() => navigation.navigate("객실보기")}>
      <Container>
        <TOpacity onPress={() => dispatch(toggleFav(id))}>
          <Favbutton1>
            <Ionicons
              size={30}
              color={isFav ? "red" : "white"}
              name={getIconName(isFav)}
            />
          </Favbutton1>

          <Favbutton>
            <Ionicons
              size={isFav ? 22 : 25}
              color={"black"}
              name={isFav ? null : getIconName(isFav)}
            />
          </Favbutton>
        </TOpacity>
        <PhotosContainer>
          {photos.length === 0 ? (
            <SlideImage source={require("../assets/roomDefault.jpg")} />
          ) : (
            <Swiper
              controlsProps={{
                PrevComponent: () => null,
                NextComponent: () => null,
              }}
            >
              {photos.map((photo) => (
                <SlideImage
                  key={photo.id}
                  source={{
                    uri: photo.file,
                  }}
                />
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
    </TouchableOpacity>
  );
};

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

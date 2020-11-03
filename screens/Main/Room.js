import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import colors from "../../colors";
import RoomPhotos from "../../components/RoomPhotos";
import utils from "../../utils";
import MapView, { Marker } from "react-native-maps";

const Container = styled.ScrollView``;
const Address = styled.Text`
  margin-top: 10px;
  font-size: 24px;
`;
const DataContainer = styled.View`
  padding: 0px 20px;
`;
const PropertyInfoContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

const PropertyInfoData = styled.View`
  background-color: ${colors.green};
  margin-right: 10px;
  border-radius: 5px;
`;

const PropertyInfoText = styled.Text`
  color: white;
  font-weight: 500;
  padding: 5px 10px;
`;

const CheckContainer = styled.View`
  margin-top: 40px;
`;

const CheckTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckTitle = styled.Text`
  font-size: 15px;
  margin-left: 15px;
`;

const CheckTime = styled.Text`
  margin-top: 10px;
`;

const MapContainer = styled.View`
  width: 100%;
  height: 200px;
  margin: 30px 0px;
`;

function formatTime(time) {
  const [hours, min, sec] = time.split(":");
  if (hours > 12) {
    return `오후 ${hours - 12}시`;
  } else {
    return `오전 ${hours}시`;
  }
}
<<<<<<< HEAD

export default ({ route: { params }, navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: params.name });
  }, []);

=======

export default ({ route: { params }, navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: params.name });
  }, []);
  console.log(params);
>>>>>>> b0275f37ef21505cfc0b3bf4028a221b6feb9351
  return (
    <Container>
      <RoomPhotos photos={params.photos} factor={2} />
      <DataContainer>
        <Address>
          {params.address} / ${params.price}
        </Address>
        <PropertyInfoContainer>
          <PropertyInfoData>
            <PropertyInfoText>침대 {params.beds}</PropertyInfoText>
          </PropertyInfoData>
          <PropertyInfoData>
            <PropertyInfoText>침실 {params.bedrooms}</PropertyInfoText>
          </PropertyInfoData>
          <PropertyInfoData>
            <PropertyInfoText>욕실 {params.bathrooms}</PropertyInfoText>
          </PropertyInfoData>
        </PropertyInfoContainer>
        <CheckContainer>
          <CheckTitleContainer>
            <Ionicons
              name={utils.isAndroid() ? "md-timer" : "ios-timer"}
              size={24}
            />
            <CheckTitle>체크인: {formatTime(params.check_in)}</CheckTitle>
          </CheckTitleContainer>
          <CheckTitleContainer>
            <Ionicons
              name={utils.isAndroid() ? "md-timer" : "ios-timer"}
              size={24}
            />
            <CheckTitle>체크아웃: {formatTime(params.check_out)}</CheckTitle>
          </CheckTitleContainer>
        </CheckContainer>
        <MapContainer>
          <MapView
            camera={{
              center: {
                latitude: parseFloat(params.lat),
                longitude: parseFloat(params.lng),
              },
              pitch: 25,
              heading: 0,
              altitude: 10 * 200,
              zoom: 16,
            }}
            zoomEnabled={true}
            style={{ height: "100%", width: "100%" }}
          >
            <Marker
              coordinate={{
                longitude: parseFloat(params.lng),
                latitude: parseFloat(params.lat),
              }}
            />
          </MapView>
        </MapContainer>
      </DataContainer>
    </Container>
  );
};

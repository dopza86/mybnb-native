import React, { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import MapPresenter from "./MapPresenter";

const { width, height } = Dimensions.get("screen");

export default ({ rooms }) => {
  const mapRef = useRef();
  const [currentIndex, setCrruentIndex] = useState(0);
  const onScroll = (e) => {
    const {
      nativeEvent: {
        contentOffset: { x },
      },
    } = e;
    const position = Math.abs(Math.round(x / width));
    setCrruentIndex(position);
  };
  const moveMap = () => {
    mapRef.current?.animateCamera(
      {
        center: {
          latitude: parseFloat(rooms[currentIndex].lat),
          longitude: parseFloat(rooms[currentIndex].lng),
        },
      },
      { duration: 1000 }
    );
  };
  useEffect(() => {
    moveMap();
  }, [currentIndex]);

  const handleRegionChange = async () => {
    try {
      const { northEast, southWest } = await mapRef.current?.getMapBoundaries();
      console.log(northEast, southWest);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <MapPresenter
      rooms={rooms}
      mapRef={mapRef}
      currentIndex={currentIndex}
      onScroll={onScroll}
      onRegionChangeComplete={handleRegionChange}
    />
  );
};

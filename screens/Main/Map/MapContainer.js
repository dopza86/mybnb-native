import { object } from "prop-types";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import api from "../../../api";
import MapPresenter from "./MapPresenter";
import MapOnRoomsPresenter from "./MapOnRoomsPresenter";

const { width, height } = Dimensions.get("screen");

export default ({ rooms }) => {
  const dispatch = useDispatch();
  const mapRef = useRef();
  const [getForm, setGetForm] = useState();
  const [currentIndex, setCrruentIndex] = useState(0);
  const [searchResults, setSearchResults] = useState();
  const [roomsOnMap, setRoomsOnMap] = useState();

  const onScroll = (e) => {
    const {
      nativeEvent: {
        contentOffset: { x },
      },
    } = e;
    const position = Math.abs(Math.round(x / width));
    setCrruentIndex(position);
  };

  const moveMap = async () => {
    console.log(searchResults);
    try {
      if (!searchResults) {
        await mapRef.current?.animateCamera(
          {
            center: {
              latitude: parseFloat(rooms[currentIndex].lat),
              longitude: parseFloat(rooms[currentIndex].lng),
            },
          },
          { duration: 1000 }
        );
      } else {
        setRoomsOnMap(searchResults.results);
        await mapRef.current?.animateCamera(
          {
            center: {
              latitude: parseFloat(roomsOnMap[currentIndex].lat),
              longitude: parseFloat(roomsOnMap[currentIndex].lng),
            },
          },
          { duration: 1000 }
        );
      }
    } catch (e) {
      console.warn(e);
    }
  };
  useEffect(() => {
    moveMap();
  }, [currentIndex]);

  const getPosition = async () => {
    try {
      const { northEast, southWest } = await mapRef.current?.getMapBoundaries();
      const north = northEast.latitude;
      const south = southWest.latitude;
      const east = northEast.longitude;
      const west = southWest.longitude;
      const form = {
        ...(north && { north: north }),
        ...(south && { south: south }),
        ...(east && { east: east }),
        ...(west && { west: west }),
      };
      setGetForm(form);
    } catch (e) {
      console.warn(e);
    }
  };

  const searchTrigger = async () => {
    try {
      const { data } = await api.searchMap(getForm);
      alert(`이 지역의 객실수 : ${data.count}`);
      setSearchResults(data);
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <MapPresenter
      rooms={roomsOnMap ? roomsOnMap : rooms}
      mapRef={mapRef}
      currentIndex={currentIndex}
      onScroll={onScroll}
      searchTrigger={searchTrigger}
      onRegionChangeComplete={getPosition}
    />
  );
};

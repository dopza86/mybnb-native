import React, { useState } from "react";
import styled from "styled-components/native";
import DismissKeyboard from "../../../components/DismissKeyboard";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Keyboard, TextInput } from "react-native";
import colors from "../../../colors";
import api from "../../../api";
import RoomCard from "../../../components/RoomCard";
import SearchPresenter from "./SearchPresenter";

export default ({ token }) => {
  const navigation = useNavigation();
  const [searching, setSearching] = useState(false);
  const [beds, setBeds] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [searchResults, setSearchResults] = useState();
  const triggerSearch = async () => {
    setSearching(true);
    const form = {
      ...(beds && { beds }),
      ...(bedrooms && { bedrooms }),
      ...(bathrooms && { bathrooms }),
      ...(maxPrice && { max_price: maxPrice }),
    };
    try {
      const { data } = await api.search(form, token);
      console.log(data);
      setSearchResults(data);
    } catch (e) {
      console.warn(e);
    } finally {
      Keyboard.dismiss();
      setSearching(false);
    }
  };
  return (
    <SearchPresenter
      navigation={navigation}
      searching={searching}
      beds={beds}
      bedrooms={bedrooms}
      bathrooms={bathrooms}
      maxPrice={maxPrice}
      searchResults={searchResults}
      triggerSearch={triggerSearch}
      setBeds={setBeds}
      setBedrooms={setBedrooms}
      setBathrooms={setBathrooms}
      setMaxPrice={setMaxPrice}
    />
  );
};

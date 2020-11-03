import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import api from "../../../api";
import SearchPresenter from "./SearchPresenter";
import { Keyboard } from "react-native";

export default ({ token }) => {
  const navigation = useNavigation();
  const [searching, setSearching] = useState(false);
  const [beds, setBeds] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [results, setResults] = useState();
  const triggerSearch = async () => {
    setSearching(true);
    const form = {
      ...(beds && { beds }),
      //beds 가있으면 beds를 리턴
      ...(bedrooms && { bedrooms }),
      ...(bathrooms && { bathrooms }),
      ...(maxPrice && { max_price: maxPrice }),
    };
    try {
      const { data } = await api.search(form, token);
      setResults(data);
    } catch (e) {
      console.warn(e);
    } finally {
      setSearching(false);
      Keyboard.dismiss();
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
      results={results}
      triggerSearch={triggerSearch}
      setBeds={setBeds}
      setBedrooms={setBedrooms}
      setBathrooms={setBathrooms}
      setMaxPrice={setMaxPrice}
    />
  );
};

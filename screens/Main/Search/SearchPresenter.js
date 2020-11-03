import React from "react";
import styled from "styled-components/native";
import DismissKeyboard from "../../../components/DismissKeyboard";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";

const Container = styled.View``;

const SearchContainer = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const SearchBar = styled.TextInput`
  height: 40px;
  width: 80%;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
`;

const CancelContainer = styled.TouchableOpacity``;

const CancelText = styled.Text``;

const Text = styled.Text``;

const FiltersContainer = styled.ScrollView`
  flex-direction: row;
  margin-top: 10px;
`;

const FilterContainer = styled.View`
  align-items: center;
  margin-right: 15px;
`;

const FilterLabel = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Filter = styled.TextInput`
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 2.5px 2.5px rgba(200, 200, 200, 0.5);
  width: 70px;
`;

export default () => {
  const navigation = useNavigation();
  return (
    <DismissKeyboard>
      <Container>
        <SearchContainer>
          <SearchBar autoFocus={true} placeholder="도시 이름으로 찾기" />
          <CancelContainer onPress={() => navigation.goBack()}>
            <CancelText>취소</CancelText>
          </CancelContainer>
        </SearchContainer>
        <FiltersContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 20 }}
        >
          <FilterContainer>
            <FilterLabel>침대갯수</FilterLabel>
            <Filter placeholder="0" keyboardType={"number-pad"} />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>침실갯수</FilterLabel>
            <Filter placeholder="0" keyboardType={"number-pad"} />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>욕실갯수</FilterLabel>
            <Filter placeholder="0" keyboardType={"number-pad"} />
          </FilterContainer>
          <FilterContainer>
            <FilterLabel>최고가</FilterLabel>
            <Filter placeholder="$0" keyboardType={"number-pad"} />
          </FilterContainer>
        </FiltersContainer>
      </Container>
    </DismissKeyboard>
  );
};

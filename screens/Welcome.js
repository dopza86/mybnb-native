import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>반갑습니다</Text>
      <Button
        onPress={() => navigation.navigate("SignUp")}
        title={"가입하기"}
      />
      <Button
        onPress={() => navigation.navigate("SignIn")}
        title={"접속하기"}
      />
    </View>
  );
};

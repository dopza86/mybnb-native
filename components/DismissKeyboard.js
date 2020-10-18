import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

function DissmissKeyboard({ children }) {
  const onpress = () => Keyboard.dismiss();
  return (
    <TouchableWithoutFeedback onPress={onpress}>
      {children}
    </TouchableWithoutFeedback>
  );
}

export default DissmissKeyboard;

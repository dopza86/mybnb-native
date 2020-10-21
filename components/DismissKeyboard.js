import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

function DismissKeyboard({ children }) {
  const onpress = () => Keyboard.dismiss();
  return (
    <TouchableWithoutFeedback onPress={onpress}>
      {children}
    </TouchableWithoutFeedback>
  );
}

export default DismissKeyboard;

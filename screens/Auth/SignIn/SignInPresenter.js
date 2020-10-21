import React from "react";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ email, setEmail, password, setPassword, handleSubmit }) => {
  return (
    <DismissKeyboard>
      <Container>
        <InputContainer>
          <Input
            value={email}
            placeholder="이메일"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            stateFn={setEmail}
          />
          <Input
            value={password}
            placeholder="비밀번호"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            stateFn={setPassword}
            isPassword={true}
          />

          <Btn text={"접속하기"} accent={true} onPress={handleSubmit} />
        </InputContainer>
      </Container>
    </DismissKeyboard>
  );
};

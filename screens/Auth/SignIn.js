import React, { useState } from "react";

import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TextInput = styled.TextInput``;

export default ({ route: { params } }) => {
  const [username, setUsername] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const handleSubmit = () => alert(`${username} ${password}`);
  return (
    <Container>
      <Input
        value={username}
        placeholder="이메일"
        autoCapitalize="none"
        onChangeText={(text) => setUsername(text)}
        stateFn={setUsername}
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
    </Container>
  );
};

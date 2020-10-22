import React, { useState } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import { isEmail } from "../../utils";
import { createAccount } from "../../api";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.View`
  margin-bottom: 30px;
`;
export default ({ navigation: { navigate } }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isFormValid = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("모든 항목을 작성해주세요");
      return false;
    }
    if (!isEmail(email)) {
      alert("유효하지 않은 이메일 입니다");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    try {
      const { status } = await createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        username: email,
        password,
      });
      if (status === 201) {
        alert("가입완료 되었습니다,로그인 해주세요!");
        navigate("SignIn", { email, password });
      }
    } catch (e) {
      alert("이미 가입된 회원입니다");
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={firstName}
              placeholder="이름"
              stateFn={setFirstName}
            />
            <Input value={lastName} placeholder="성" stateFn={setLastName} />
            <Input value={email} placeholder="이메일" ke stateFn={setEmail} />
            <Input
              value={password}
              placeholder="비밀번호"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn
            loading={loading}
            text={"가입하기"}
            accent
            onPress={handleSubmit}
          ></Btn>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};

import React, { useState } from "react";
import api from "../../../api";
import utils from "../../../utils";
import SignUpPresenter from "./SignUpPresenter";

export default ({ navigation: { navigate } }) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
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
    if (!utils.isEmail(email)) {
      alert("이메일 형식이 유효하지 않습니다");
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
      const { status } = await api.createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        username: email,
        password,
      });
      if (status === 201) {
        alert("가입완료 되었습니다 , 로그인 해주세요!");
        navigate("SignIn", { email, password });
      }
    } catch (e) {
      alert("이미 가입된 회원입니다");
      console.warn(e);
    }
  };

  return (
    <SignUpPresenterlastName
      firstName={firstName}
      email={email}
      password={password}
      loading={loading}
      setLastName={setLastName}
      setFirstName={setFirstName}
      setEmail={setEmail}
      setPassword={setPassword}
      setLoading={setLoading}
    />
  );
};

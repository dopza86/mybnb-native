import React, { useState } from "react";
import { userLogin } from "../../../redux/usersSlice";
import { useDispatch } from "react-redux";
import utils from "../../../utils";
import SignInPresenter from "./SignInPresenter";

export default ({ route: { params } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(params?.email || "dopza@gmail.com");
  const [password, setPassword] = useState(params?.password || "1234");

  const isFormValid = () => {
    if (email === "" || password === "") {
      alert("이메일과 비밀번호를 입력해주세요");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("이메일 형식이 옳바르지 않습니다");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(
      userLogin({
        username: email,
        password,
      })
    );
  };

  return (
    <SignInPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

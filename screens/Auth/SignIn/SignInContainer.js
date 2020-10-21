import React, { useState } from "react";
import { userLogin } from "../../../redux/usersSlice";
import { useDispatch } from "react-redux";
import utils from "../../../utils";
import SignInPresenter from "./SignInPresenter";

export default ({ route: { params } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const isFormValid = () => {
    if (email === "" || password === "") {
      alert("모든 항목을 작성해주세요");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("이메일 형식이 유효하지 않습니다");
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

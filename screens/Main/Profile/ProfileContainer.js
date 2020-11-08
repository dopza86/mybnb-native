import React, { useEffect } from "react";
import ProfilePresenter from "./ProfilePresenter";

export default ({ getMe, user }) => {
  useEffect(() => {
    getMe();
  }, []);

  return <ProfilePresenter user={user} />;
};

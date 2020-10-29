import React, { useEffect } from "react";
import SavedPresenter from "./SavedPresenter";

export default ({ getFavs, rooms }) => {
  useEffect(() => {
    getFavs();
  }, []);
  console.log(rooms);
  return <SavedPresenter rooms={rooms} />;
};

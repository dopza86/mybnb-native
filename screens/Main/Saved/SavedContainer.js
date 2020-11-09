import React, { useEffect } from "react";
import SavedPresenter from "./SavedPresenter";
export default ({ getFavs, rooms, increaseFavsPage, favsPage }) => {
  useEffect(() => {
    getFavs(1);
  }, []);
  useEffect(() => {
    getFavs(favsPage);
  }, [favsPage]);

  return <SavedPresenter rooms={rooms} increaseFavsPage={increaseFavsPage} />;
};

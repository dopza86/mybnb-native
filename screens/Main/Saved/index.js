import { connect } from "react-redux";
import { getFavs } from "../../../redux/usersSlice";
import { increaseFavsPage } from "../../../redux/roomsSlice";

import SavedContainer from "./SavedContainer";

function mapStateToProps(state) {
  state.roomsReducer.favs;
  return {
    rooms: state.roomsReducer.favs,
    favsPage: state.roomsReducer.favsPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFavs: (favsPage) => dispatch(getFavs(favsPage)),
    increaseFavsPage: () => dispatch(increaseFavsPage()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedContainer);

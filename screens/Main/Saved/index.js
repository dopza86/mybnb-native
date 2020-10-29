import { connect } from "react-redux";
import { getFavs } from "../../../redux/usersSlice";
import SavedContainer from "./SavedContainer";

function mapDispatchToProps(dispatch) {
  return {
    getFavs: () => dispatch(getFavs()),
  };
}

export default connect(null, mapDispatchToProps)(SavedContainer);

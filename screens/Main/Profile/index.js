import ProfileContainer from "./ProfileContainer";
import { connect } from "react-redux";
import { getMe } from "../../../redux/usersSlice";

function mapStateToProps(state) {
  return { user: state.usersReducer.user };
}

function mapDispatchToProps(dispatch) {
  return {
    getMe: () => dispatch(getMe()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

import { connect } from "react-redux";
import { SET_VISIBILITY_FILTER } from "../actions";
import Link from "../components/Link";

//5 ownprops
const mapStateToProps = (state , ownProps)=>({
    active: ownProps.filter === state.visibilityFilter
})


const mapDispatchToProps = ({ dispatch, ownProps }) => ({
  onClick: () => dispatch(SET_VISIBILITY_FILTER(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
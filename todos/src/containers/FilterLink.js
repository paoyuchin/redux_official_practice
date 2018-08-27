import { connect } from "react-redux";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});
export default connect()(Link);

//在Link裡面加上兩個props 然後吐出一個smart component
//smart component

//If your mapStateToProps function is declared as taking two parameters, 
//it will be called with the store state as the first parameter and the props passed to the connected component as the second parameter,
//and will also be re-invoked whenever the connected component receives new props as determined by shallow equality comparisons. 
//(The second parameter is normally referred to as ownProps by convention.)

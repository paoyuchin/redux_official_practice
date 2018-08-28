import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => (
  console.log(children),
  (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: "4px"
      }}
    >
      {children}
    </button>
  )
);
//<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;

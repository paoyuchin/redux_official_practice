import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => (
  <div>
    <button onClick={onClick} disabled={active}>
      {children}
    </button>
  </div>
);

import React from 'react';
import './sidebarOption.css';
import PropTypes from 'prop-types';

function SidebarOption({ Icon, text, active }) {
  return (
    <div
      className={`sidebarOption ${
        active && 'sidebarOption__active'
      }`}
    >
      <Icon />
      &nbsp;&nbsp;
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;

SidebarOption.propTypes = {
  Icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

import React from "react";
import "./directy-menu.styles.scss";
import MenuItem from "./../menu-item/menu-item.components";
import { connect } from "react-redux";
import { selectDirectorySections } from "./../../redux/directory/directory.selectors.js";
import { createStructuredSelector } from "reselect";
const Directory = ({ sections }) => (
  <div className="directory-menu ">
    {sections.map(({ id, ...sectionsOptions }) => (
      <MenuItem key={id} {...sectionsOptions} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

import React from "react";
import PropTypes from "prop-types";
import SavedExhibitions from "components/savedExhibitions/SavedExhibitions";

export default function SavedPage({}) {
  //Because we are using our savedItemsContext, we no longer need to pass in multiple props to this component.
  return <SavedExhibitions />;
}

SavedPage.propTypes = {};

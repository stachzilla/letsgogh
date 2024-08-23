import React from "react";
import PropTypes from "prop-types";
import SavedPage from "components/savedExhibitions/SavedExhibitions";

export default function SavedPage({
  savedExhibitions,
  updateArtFeature,
  toggleSaveExhibition,
  savedExhibitionIds,
  setSearchValue,
}) {
  return (
    <SavedExhibitions
      savedExhibitions={savedExhibitions}
      updateArtFeature={updateArtFeature}
      toggleSaveExhibition={toggleSaveExhibition}
      savedExhibitionIds={savedExhibitionIds}
      setSearchValue={setSearchValue}
    />
  );
}

SavedPage.propTypes = {};

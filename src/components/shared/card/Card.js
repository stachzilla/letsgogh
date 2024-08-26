import "./Card.css";
import { Link } from "util/router";
import PropTypes from "prop-types";
import { useSavedItemsContext } from "contexts/savedItemsContext";

export const Card = ({ exhibition }) => {
  const { savedItems, saveItem, removeItem } = useSavedItemsContext();

  const isSaved = savedItems[exhibition?.id];

  const handleSave = () => {
    saveItem(exhibition);
  };

  const handleRemove = () => {
    removeItem(exhibition);
  };

  console.log("exhibition", exhibition);

  return (
    <div className="exhibition-card-container" title={exhibition?.alt_text}>
      <div className="exhibition-card">
        <div className="image-container">
          <img
            alt={exhibition?.title}
            src={`https://www.artic.edu/iiif/2/${exhibition?.image_id}/full/300,/0/default.jpg`}
          />
          <p className="hover-description">
            {exhibition?.short_description ? (
              //   <p dangerouslySetInnerHTML={{ __html: short_description }} />
              <>{exhibition?.short_description}</>
            ) : (
              "No information provided"
            )}
          </p>
        </div>
        <h3 className="title">{exhibition?.title}</h3>
        <p className="artist-title">
          <em>{exhibition?.artist_title}</em>
        </p>
        <div className="button-container">
          F
          {/* <button
            className={`save-button ${
              savedExhibitionIds.includes(exhibition?.id)
                ? "remove-state"
                : "save-state"
            }`}
            onClick={() => saveItem(exhibition)}
          > */}
          <button onClick={isSaved ? handleRemove : handleSave}>
            {isSaved ? "REMOVE" : "SAVE"}
          </button>
          {/* {savedExhibitionIds.includes(exhibition?.id) ? "REMOVE" : "SAVE"} */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  exhibition: PropTypes.object.isRequired,
};

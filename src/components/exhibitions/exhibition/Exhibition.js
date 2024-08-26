import React from "react";
import PropTypes from "prop-types";
import { useExhibition } from "stores/artStore";
import { Link } from "util/router";

function Exhibition({ exhibitionId }) {
  const { data: exhibition, isLoading } = useExhibition(exhibitionId);

  if (isLoading) return <p>Loading...</p>;

  console.log(exhibition?.data?.data);

  return (
    <main className="main">
      <div className="container pb-5">
        <h1 className="title">{exhibition?.data?.data?.title}</h1>
        {exhibition?.data?.artist_title && (
          <h2 className="artist_title">
            {exhibition?.data?.data?.artist_title}
          </h2>
        )}
        <img
          src={`https://www.artic.edu/iiif/2/${exhibition?.data?.data?.image_id}/full/843,/0/default.jpg`}
        />
        {exhibition?.data?.data?.description && (
          <p>
            <p>Description:</p>
            <span
              className="description"
              dangerouslySetInnerHTML={{
                __html: exhibition?.data?.data?.description,
              }}
            />
          </p>
        )}
        {exhibition?.data?.data?.place_of_origin && (
          <p className="place_of_origin">
            Place of Origin: {exhibition?.data?.data?.place_of_origin}
          </p>
        )}
        {exhibition?.data?.data?.date_display && (
          <p className="date_display">
            Date: {exhibition?.data?.data?.date_display}
          </p>
        )}
        {exhibition?.data?.data?.style_title && (
          <p className="style_title">
            Style: {exhibition?.data?.data?.style_title}
          </p>
        )}
        <Link to={`/`}>
          <button className="home-button">BACK</button>
        </Link>
        {/* <button
        className={`save-button ${
          savedExhibitionIds.includes(id) ? "remove-state" : "save-state"
        }`}
        onClick={() => toggleSaveExhibition(id)}
      >
        {savedExhibitionIds.includes(id) ? "REMOVE" : "SAVE"}
      </button> */}
      </div>
    </main>
  );
}

Exhibition.propTypes = {};

export default Exhibition;

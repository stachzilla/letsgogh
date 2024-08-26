import React, { useState } from "react";
import { useExhibitions } from "stores/artStore";
import { Card } from "../shared/card/Card";
import "./Exhibitions.css";
import PropTypes from "prop-types";
import { useDebounce } from "hooks/useDebounce";

export default function Exhibitions({}) {
  const [search, setSearch] = useState("");
  //This will auto-update the search term after 300 milliseconds.  So the user types, stops for 300 milliseconds, api request if made, new data is returned.
  const debouncedSearchTerm = useDebounce(search, 300);
  //This calls useExhibitions (which is our React Query function), which then calls the API, and provides the debouncedSearchTerm as the search value.
  const { data: exhibitions, isLoading } = useExhibitions(debouncedSearchTerm);

  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      setSearch(null);
    } else {
      setSearch(e.target.value);
    }
  };

  const exhibitionCards = exhibitions?.data?.data?.map((exhibition) => {
    // Simplify this by passing the exhibition into the component and do your property access within the component
    // Do not prop drill functions through multiple levels, this can cause memory leaks and/or re-rendering issues
    // Instead, create a context and handle everything in there.  See contexts/savedItemsContext.js
    // return (
    //   <Card
    //     id={exhibition?.id}
    //     key={exhibition?.id}
    //     image_id={exhibition?.image_id}
    //     title={exhibition?.title}
    //     artist_title={exhibition?.artist_title}
    //     alt_text={exhibition?.alt_text}
    //     short_description={exhibition?.short_description}
    //     updateArtFeature={updateArtFeature}
    //     toggleSaveExhibition={toggleSaveExhibition}
    //     savedExhibitionIds={savedExhibitionIds}
    //   />
    // );

    return <Card exhibition={exhibition} key={exhibition?.id} />;
  });

  if (isLoading) return <p>Curating your results...</p>;

  return (
    <div className="exhibitions-container">
      {search ?? (
        <p>
          <em>Showing top exhibitions containing:</em> <strong>{search}</strong>
        </p>
      )}

      <div className="exhibition-cards">{exhibitionCards}</div>
    </div>
    // <div className="exhibitions-container">
    //   {searchValue ? (
    //     <p>
    //       <em>Showing top exhibitions containing:</em>{" "}
    //       <strong>{searchValue}</strong>
    //     </p>
    //   ) : (
    //     <></>
    //   )}
    //   <div className="exhibition-cards">
    //     {exhibitionCards.length > 0 ? (
    //       exhibitionCards
    //     ) : (
    //       <p>Curating your results...</p>
    //     )}
    //   </div>
    // </div>
  );
}

Exhibitions.propTypes = {};

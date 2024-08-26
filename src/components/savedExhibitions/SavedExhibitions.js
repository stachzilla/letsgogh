import { Link } from "util/router";
import { Card } from "../shared/card/Card";
import PropTypes from "prop-types";
import "./SavedExhibitions.css";
import { useSavedItemsContext } from "contexts/savedItemsContext";

//I preferred named component functions over arrow functions
//That changes imports from `import {componentName} from '...'` to `import componentName from '...'`
export default function SavedExhibitions({}) {
  const { savedItems } = useSavedItemsContext();

  // No need to map these to a different variable.
  // const savedExhibitionCards = savedItems?.map((exhibition) => {
  //   return <Card exhibition={exhibition} />;
  // });

  //This is just to show how to handle a conditional in-line of rendering
  //I prefer to have a render function insted of doing if/else in-line
  function renderSavedItems() {
    //This is to showcase a not-not shorthand for length check
    //It converts length to a boolean, and then checks if it's true
    //So if length = 0 or undefined or null (also known as falsy), it will return false, and show the Nothing saved yet
    //If length > 0, it will return true, and map our cards
    if (!!savedItems?.length) {
      return savedItems?.map((exhibition) => (
        <Card exhibition={exhibition} key={exhibition?.id} />
      ));
    }

    //We don't need to check any conditions here because it's the default display.  If there are saved items we will never get here.
    return <p>Nothing saved yet</p>;
  }

  return (
    <div className="container">
      <h2>Your Curated Bucket List</h2>
      {/* <Link to={`/`} className="home-button" onClick={() => setSearchValue("")}> */}
      <Link to={`/`} className="home-button">
        <strong>Back to Home</strong>
      </Link>
      <div className="saved-exhibitions-container">{renderSavedItems()}</div>
    </div>
  );
}

SavedExhibitions.propTypes = {};

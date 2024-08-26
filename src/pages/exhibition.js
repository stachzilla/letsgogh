import React from "react";
import Exhibition from "components/exhibitions/exhibition/Exhibition";
import { useRouter } from "util/router";

export default function ExhibitionPage({}) {
  console.log("exhibition");
  const router = useRouter();
  //We use our react router helper to get the exhibition ID off of the url and pass it in to our component as a prop.
  //The router could be accessed within Exhibition itself, but I prefer to do all url/router checks at the /page level
  //It keeps things tidy.
  //I'm not using the <ArtFeature> name here because I want my component naming to be easily discoverable.  We have Exhibitions and Exhibition as our search and details pages
  return <Exhibition exhibitionId={router.query.exhibitionId} />;
}

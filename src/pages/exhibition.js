import React from "react";
import Exhibition from "components/exhibitions/exhibition/Exhibition";
import { useRouter } from "util/router";

export default function ExhibitionPage({}) {
  const router = useRouter();

  console.log(router.query.recipeId);
  return <Exhibition exhibitionId={router.query.exhibitionId} />;
}

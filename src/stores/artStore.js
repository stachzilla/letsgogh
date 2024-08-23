import { artService } from "services/artService";
import { useQuery } from "react-query";
import { cacheKeys } from "./storeConfig";

export function useExhibitions(searchTerm) {
  const cacheKey = [cacheKeys.EXHIBITIONS];
  const query = () => artService.getExhibitions(searchTerm);
  return useQuery(cacheKey, query, {
    refetchOnWindowFocus: false,
  });
}

export function useExhibition(exhibitionId) {
  const cacheKey = [cacheKeys.EXHIBITION, { exhibitionId }];
  const query = () => artService.getExhibition(exhibitionId);
  return useQuery(cacheKey, query, {
    refetchOnWindowFocus: false,
  });
}

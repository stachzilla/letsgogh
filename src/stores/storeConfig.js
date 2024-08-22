import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
} from "react-query";

const queryClient = new QueryClient();
export const sharedQueryClient = queryClient;

// React Query context provider that wraps our app
export function QueryClientProvider(props) {
  return (
    <QueryClientProviderBase client={sharedQueryClient}>
      {props.children}
    </QueryClientProviderBase>
  );
}

export const cacheKeys = {
  EXHIBITION: "exhibition",
  EXHIBITIONS: "exhibitions",
};

import React from "react";
import "./../styles/global.scss";
import { QueryClientProvider } from "stores/storeConfig";
import { Switch, Route, Router } from "util/router";
import NotFoundPage from "./notfound";
import SavedPage from "./saved";
import ExhibitionPage from "./exhibition";
import ExhibitionsPage from "./exhibitions";
import { Header } from "components/shared/header/Header";
import { SavedItemsProvider } from "contexts/savedItemsContext";

function App() {
  return (
    //This provider is a context for the app needed for React Query to work
    <QueryClientProvider>
      {/* This is where we store our saved items */}
      <SavedItemsProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={ExhibitionsPage} />
            <Route
              exact
              path="/exhibitions/:exhibitionId"
              component={ExhibitionPage}
            />
            <Route exact path="/saved" component={SavedPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </SavedItemsProvider>
    </QueryClientProvider>
  );
}

export default App;

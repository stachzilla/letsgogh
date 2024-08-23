import React from "react";
import "./../styles/global.scss";
import AboutPage from "./about";
import { Switch, Route, Router } from "util/router";
import NotFoundPage from "./notfound";
import "./../util/analytics";

import { QueryClientProvider } from "stores/storeConfig";
import ExplorePage from "./explore";
import SavedPage from "./saved";
import ExhibitionPage from "./exhibition";
import ExhibitionsPage from "./exhibitions";

function App() {
  return (
    <QueryClientProvider>
      <Router>
        <Header setSearchValue={setSearchValue} searchValue={searchValue} />
        <Switch>
          <Route exact path="/" component={ExhibitionsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route
            exact
            path="/exhibition/:exhibitionId"
            component={ExhibitionPage}
          />
          <Route exact path="/saved" component={SavedPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

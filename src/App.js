import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Componenet/Search/Search";
import Details from "./Componenet/Details/Details";
import preload from "./data.json";
import Landing from "./Componenet/Landing/Landing";
import Responsive from "./Componenet/showCard/carousal";

const FourOhFour = () => <h1>Page not found</h1>;

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/cards"
            component={() => <Responsive Shows={preload.shows} />}
          />
          <Route
            path="/search"
            component={() => <Search Shows={preload.shows} />}
          />
          <Route
            path="/details/:id"
            component={props => {
              const SelectedShow = preload.shows.find(
                show => props.match.params.id === show.imdbID
              );
              return <Details show={SelectedShow} {...props} />;
            }}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

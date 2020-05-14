import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TvShow, Episode } from './pages';
import * as serviceWorker from './serviceWorker';
import './style.sass';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/episode">
          <Episode />
        </Route>
        <Route>
          <Redirect to="/show" />
          <TvShow />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

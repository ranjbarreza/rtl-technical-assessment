import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Episode, TvShow } from './pages';
import * as serviceWorker from './serviceWorker';
import './style.sass';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/show">
          <TvShow />
        </Route>
        <Route path="/episode">
          <Episode />
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

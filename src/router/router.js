import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Demo from '../pages/demo';

const history = createBrowserHistory();

function Router() {
  return (<BrowserRouter history={history}>
    <Switch>
      <Route exact={true} path='/'>
        <Demo/>
      </Route>
    </Switch>
  </BrowserRouter>)
}

export default Router;

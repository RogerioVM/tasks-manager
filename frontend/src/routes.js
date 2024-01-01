import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Login from './pages/Login';
import Profile from './pages/Profile';
import Tasks from './pages/Profile/Tasks';
import Register from './pages/Register';
import Update from './pages/Profile/Update';

// import { Container } from './styles';

function Routes() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            {/* <Route path="/" exact component={Login} /> */}
            {/* <Route path="/register" component={Register} /> */}
            <Route path="/" component={Profile} />
            <Route path="/update" component={Update} />
            <Route path="/tarefas" component={Tasks} />
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;
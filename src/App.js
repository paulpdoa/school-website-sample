import { Switch,Route } from "react-router-dom";
import { useState } from 'react';

import Main from './components/Main';
import NavMain from "./components/partials/NavMain";
import NotFound from "./components/NotFound";
import Login from "./components/auth/Login";

const App = () => {

  const[headTitle] = useState('School Website Sample');

  return (
    <>
      <Switch>
      <Route exact path='/login'>
        <Login />
      </Route>

        <>
        <NavMain />
          <Switch>
            <Route exact path='/'>
              <Main headTitle={headTitle} />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </> 
      </Switch>
    </>
  );
}

export default App;

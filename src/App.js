import { Switch,Route, Redirect } from "react-router-dom";
import { useState } from 'react';

import Main from './components/Main';
import NavMain from "./components/partials/NavMain";
import NotFound from "./components/NotFound";

const App = () => {

  const[headTitle] = useState('School Website Sample');

  return (
    <>
      <Switch>
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

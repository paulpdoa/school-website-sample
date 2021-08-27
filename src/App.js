import { Switch,Route } from "react-router-dom";
import { useState } from 'react';

import Main from './components/Main';
import NavMain from "./components/partials/NavMain";
import NotFound from "./components/NotFound";
import Login from "./components/auth/Login";
import Enrollment from "./components/Enrollment";
import FooterMain from "./components/partials/FooterMain";

const App = () => {

  const[headTitle] = useState('South Hill School');

  return (
    <>
      <Switch>
      <Route exact path='/login'>
        <Login headTitle={headTitle} />
      </Route>

        <>
        <NavMain />
          <Switch>
            <Route exact path='/'>
              <Main headTitle={headTitle} />
            </Route>

            <Route exact path='/enrollment'>
              <Enrollment headTitle={headTitle} />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
          <FooterMain />
        </> 
      </Switch>
    </>
  );
}

export default App;

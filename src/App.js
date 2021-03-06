import React, { useReducer, useEffect, useState } from "react";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignOut,
  AmplifySignIn,
  AmplifyForgotPassword,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { Auth } from "aws-amplify";
import Alerts from "./Components/Layout/Alerts";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Dashboard from "./Components/Dashboard";
import Nav from "./Components/Nav";
import Jobs from "./Components/Jobs/Jobs";
import AddJob from "./Components/Jobs/AddJob/AddJob";
import Account from "./Components/Account";
import Reports from "./Components/Reports";
import JobPage from './Pages/JobPage';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState();

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  const getUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();

      setUser([{ username: user.username, ...user.attributes }]);
    } catch (error) {
      console.log(error);
    }
  };

  return authState === AuthState.SignedIn && user ? (
    <Router>
      <div className='App'>
        <Nav />

        <component>
          <Alerts />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/jobs' component={Jobs} />
            
            <Route exact path='/jobs/:jobnumber' component={JobPage} />
            <Route exact path='/jobs/add' component={AddJob} />
            <Route exact path='/account' component={Account} />
            <Route exact path='/reports' component={Reports} />
          </Switch>
        </component>
      </div>{" "}
    </Router>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignIn
        slot='sign-in'
        formFields={[{ type: "email" }, { type: "password" }]}
      />
      <AmplifySignUp
        headerText='Sign Up for ServeASAP'
        slot='sign-up'
        formFields={[
          { type: "name", label: "Name", placeholder: "Name"},
          { type: "username", required: false },
          { type: "email" },  
          { type: "password" },
        ]}
      />
      <AmplifyForgotPassword
         slot="forgot-password"
        formFields={[{ type: "email" }]}
      />
    </AmplifyAuthenticator>
  );
};

export default App;

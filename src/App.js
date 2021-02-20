import React, { useReducer, useEffect } from "react";
import Dashboard from "./Components/Dashboard";
import Nav from "./Components/Nav";
import Jobs from "./Components/Jobs/Jobs";
import AddJob from "./Components/Jobs/AddJob/AddJob";   
import Account from "./Components/Account";
import Reports from "./Components/Reports";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { reducer, initialState } from "./Reducer/navReducer";

const App = () => {
  const [dashPage, dispatch] = useReducer(reducer, initialState);
  console.log(dashPage.currentPage);

  useEffect(() => {
   
  }, []); 

  // const { currentPage } = dashPage;
  return (
    <Router>
      <div className='App'>
        <Nav dispatch={dispatch} />

        <component>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/jobs' component={Jobs} />
          <Route exact path='/jobs/add' component={AddJob} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/reports' component={Reports} />
        </component>
      </div>{" "}
    </Router>
  );
};

export default App;

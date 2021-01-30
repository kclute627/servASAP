import React, {useReducer} from 'react'
import Nav from '../Components/Nav'
import Jobs from '../Components/Jobs';

const initialState = {
    currentPage: "dashboard",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "dashboard":
        return { ...state, currentPage: "dashboard" };
      case "jobs":
        return { ...state, currentPage: "jobs" };
      case "invoices":
        return { ...state, currentPage: "invoices" };
      case "account":
        return { ...state, currentPage: "account" };
      case "reports":
        return { ...state, currentPage: "reports" };
      default:
        return state
    }
  };
  
const Dashboard = (props) => {
    const [dashPage, dispatch] = useReducer(reducer, initialState)
    console.log(dashPage.currentPage)

    const {currentPage} = dashPage
    return (
        <div className= 'dashboard' >
           
            <Nav dispatch={dispatch} />   
            {
                currentPage === 'jobs' ? <Jobs/> : null 
            }
            
        </div>
    )
}

export default Dashboard

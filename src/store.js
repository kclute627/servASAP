import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {setFormData} from './Reducer/addjobFormReducer'; 
import {alerts} from './Reducer/alertReducer'; 
import {nav} from './Reducer/navReducer'; 





const reducer = combineReducers({  
    setFormData,
    alerts,
    nav  
})








const store = createStore(
    reducer,    
    composeWithDevTools(applyMiddleware(thunk)) 
               
)
 
export default store;
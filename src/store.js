import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {setFormData} from './Reducer/addjobFormReducer'; 





const reducer = combineReducers({  
    setFormData  
})








const store = createStore(
    reducer,    
    composeWithDevTools(applyMiddleware(thunk)) 
               
)
 
export default store;
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";
import { createStore,applyMiddleware } from "redux";
        
const thunk1 = [thunk];
const store = createStore(rootReducer, applyMiddleware(...thunk1));
export default store;


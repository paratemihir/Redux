import { combineReducers } from "redux";
import userSlicer from "../features/userSlicer";
import contactSlicer from "../features/contactSlicer";

const rootReducer = combineReducers({
    user: userSlicer,
    contact: contactSlicer
})
export default rootReducer
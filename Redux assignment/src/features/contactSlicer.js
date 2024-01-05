import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// import { createSlice } from "reduxjs/toolkit"
const objectinia = {
    allcontact: [],
    singlecontact: {},
    age: 31
}

const ALLCONTACT = "ALLCONTACT";

const contactSlicer = (state = objectinia, action) => {
    switch (action.type) {
        case 'ALLCONTACT':
            return {
                ...state, allcontact: action.payload
            }
    }
    return state;
}
export default contactSlicer;

const setcontact = (data) => ({ type: ALLCONTACT, payload: data });
export const selectcontact = (api) => {
    return function (dispatch) {
        axios.get(api)
            .then((res) =>
                dispatch(setcontact(res.data))
            )
    }
}

export const deleteData = (api) => {
    return function () {
        axios.delete(api)
            .then((resp) => console.log(resp));
    }
}


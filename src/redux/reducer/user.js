import { defaultJSON } from "../../utils";

const initialState = {
    userJSON: []
}

export default function (state = { ...initialState }, action) {
    switch (action.type) {
        case "INITIAL_JSON_LOAD": {
            return { ...state, userJSON: defaultJSON }
        }
        default:
            return state
    }
}
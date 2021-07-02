import { GET_JOURNALS, DELETE_JOURNALS, ADD_JOURNALS } from "../actions/types.js"

const initialState = {
    journals: [],
    journal: {}
}

export default function(state = initialState, action) {
    switch (action.type) {

        case GET_JOURNALS:
            return {
                ...state,
                journals: action.payload
            }

        case DELETE_JOURNALS:
            return {
                ...state,
                journals: state.journals.filter(journal => journal.id !== action.payload)
            }


        case ADD_JOURNALS:
            return {
                ...state,
                journals: [...state.journals, action.payload],
                journal: action.payload
            }
        default:
            return state;

    }
}
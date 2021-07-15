import { GET_PAPERS, DELETE_PAPERS, ADD_PAPERS, SEARCH_PAPERS, GET_PAPER } from "../actions/types.js"

const initialState = {
    papers: [],
    paper: {}
}

export default function(state = initialState, action) {
    switch (action.type) {

        case GET_PAPER:
            return {
                ...state,
                paper: action.payload
            }

        case GET_PAPERS:
            return {
                ...state,
                paper: [],
                papers: action.payload
            }



        case DELETE_PAPERS:
            return {
                ...state,
                papers: state.papers.filter(paper => paper.id !== action.payload)
            }


        case ADD_PAPERS:
            return {
                ...state,
                papers: [...state.papers, action.payload],
                paper: action.payload
            }

        case SEARCH_PAPERS:
            return {
                ...state,
                papers: action.payload
            }

        default:
            return state;

    }
}
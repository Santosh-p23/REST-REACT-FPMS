import axios from 'axios'
import { createMessages, returnErrors } from './messages'

import { GET_PAPERS, DELETE_PAPERS, ADD_PAPERS } from './types'

import { tokenConfig } from './auth'


export const getPapers = () => (dispatch, getState) => {
    axios.get('/api/papers/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_PAPERS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deletePapers = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/papers/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({ deletePaper: "Paper Deleted" }))
            dispatch({
                type: DELETE_PAPERS,
                payload: id
            });
        })
        .catch(err => console.log(err));



}


export const addPapers = (paper) => (dispatch, getState) => {

    const body = JSON.stringify(paper)
    console.log("The body is ", body)

    axios
        .post(`/api/papers/`, body, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessages({ addPaper: "Paper Added" }))
            dispatch({
                type: ADD_PAPERS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));



}
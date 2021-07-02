import axios from 'axios'
import { createMessages, returnErrors } from './messages'

import { GET_JOURNALS, DELETE_JOURNALS, ADD_JOURNALS } from './types'

import { tokenConfig } from './auth'
//GET JOURNALS

export const getJournals = () => (dispatch, getState) => {
    axios.get('/api/journals/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_JOURNALS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteJournals = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/journals/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({ deleteJournal: "Journal Deleted" }))
            dispatch({
                type: DELETE_JOURNALS,
                payload: id
            });
        })
        .catch(err => console.log(err));



}


export const addJournals = (title, publisher, volume, peer_reviewed, issn, issue, pages, journal_link, publication_date, status) => (dispatch, getState) => {

    const journal = JSON.stringify({ title, publisher, volume, peer_reviewed, issn, issue, pages, journal_link, publication_date, status })
    console.log(journal)

    axios
        .post(`/api/journals/`, journal, tokenConfig(getState))
        .then(res => {
            dispatch(createMessages({ addJournal: "Journal Added" }))
            dispatch({
                type: ADD_JOURNALS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));



}
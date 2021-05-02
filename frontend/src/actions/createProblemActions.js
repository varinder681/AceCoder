import axios from 'axios'
import {
    PROBLEM_TITLE_CHANGE,
    PROBLEM_DESCRIPTION_CHANGE,
    PROBLEM_DIFFICULTY_CHANGE,
    PROBLEM_EDITORIAL_CHANGE,
    PROBLEM_SUBMIT_FAIL,
    PROBLEM_SUBMIT_REQUEST,
    PROBLEM_SUBMIT_SUCCESS
} from '../constants/createProblemConstants'

export const handleTitleChange = (title) => async dispatch => {
    dispatch({
        type : PROBLEM_TITLE_CHANGE,
        payload : title
    })
}

export const handleDescriptionChange = (description) => async dispatch => {
    dispatch({
        type : PROBLEM_DESCRIPTION_CHANGE,
        payload : description
    })
}

export const handleDifficultyChange = (difficulty) => async dispatch => {
    dispatch({
        type : PROBLEM_DIFFICULTY_CHANGE,
        payload : difficulty
    })
}

export const handleEditorialChange = (editorial) => async dispatch => {
    dispatch({
        type : PROBLEM_EDITORIAL_CHANGE,
        payload : editorial
    })
}

export const submitProblem = (problem) => async dispatch => {
    dispatch({
        type : PROBLEM_SUBMIT_REQUEST
    })
    
    try {
        // const data = JSON.stringify(problem)
        const {data} = await axios.post('/create-problem/submit',{problem : JSON.stringify(problem)})
        dispatch({
            type : PROBLEM_SUBMIT_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : PROBLEM_SUBMIT_FAIL,
            payload : error.response.data
        })
    }
}
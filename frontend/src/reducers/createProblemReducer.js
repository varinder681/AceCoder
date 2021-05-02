import {
    PROBLEM_TITLE_CHANGE,
    PROBLEM_DESCRIPTION_CHANGE,
    PROBLEM_DIFFICULTY_CHANGE,
    PROBLEM_EDITORIAL_CHANGE,
    PROBLEM_SUBMIT_FAIL,
    PROBLEM_SUBMIT_REQUEST,
    PROBLEM_SUBMIT_SUCCESS
} from '../constants/createProblemConstants'

const initialState = {
    difficulty : localStorage.getItem('problem-difficulty') ? JSON.parse(localStorage.getItem('problem-difficulty')) : 'easy',
    description : localStorage.getItem('problem-description-delta') ? JSON.parse(localStorage.getItem('problem-description-delta')) : null,
    editorial : localStorage.getItem('problem-editorial-delta') ? JSON.parse(localStorage.getItem('problem-editorial-delta')) : null,
    title : localStorage.getItem('problem-title') ? JSON.parse(localStorage.getItem('problem-title')) : '',
    searchTitle : localStorage.getItem('problem-search-title') ? JSON.parse(localStorage.getItem('problem-search-title')) : '',
}

export const createProblemReducer = (state=initialState,action) => {
    const {type,payload} = action
    switch(type) {
        case PROBLEM_TITLE_CHANGE: 
            return {
                ...state,
                title : payload,
                searchTitle : payload.toLowerCase().trim().split(' ').join('-')
            }
        case PROBLEM_DESCRIPTION_CHANGE:
            return {
                ...state,
                description : payload
            }
        case PROBLEM_DIFFICULTY_CHANGE:
            return {
                ...state,
                difficulty : payload
            }
        case PROBLEM_EDITORIAL_CHANGE:
            return {
                ...state,
                editorial : payload
            }
        default:
            return state;
    }
}

const initialStateProblemReducer = {
    loading : false,
    error : null
}

export const problemSubmitReducer = (state=initialStateProblemReducer,action) => {
    const {type,payload} = action
    switch(type) {
        case PROBLEM_SUBMIT_REQUEST:
            return {
                loading : true,
                error : false
            }
        case PROBLEM_SUBMIT_SUCCESS: 
            return {
                loading : false,
                error : null,
                problem : payload
            }
        case PROBLEM_SUBMIT_FAIL:
            return {
                loading : false,
                error : payload,
            }
        default : 
            return state
    }
}
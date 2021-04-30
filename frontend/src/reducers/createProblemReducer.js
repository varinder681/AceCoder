import {
    PROBLEM_TITLE_CHANGE,
    PROBLEM_DESCRIPTION_CHANGE,
    PROBLEM_DIFFICULTY_CHANGE,
    PROBLEM_EDITORIAL_CHANGE,
} from '../constants/createProblemConstants'

const initialState = {}

export const createProblemReducer = (state=initialState,action) => {
    const {type,payload} = action
    switch(type) {
        case PROBLEM_TITLE_CHANGE: 
            return {
                ...state,
                title : payload
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
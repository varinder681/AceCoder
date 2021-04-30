import {
    PROBLEM_TITLE_CHANGE,
    PROBLEM_DESCRIPTION_CHANGE,
    PROBLEM_DIFFICULTY_CHANGE,
    PROBLEM_EDITORIAL_CHANGE,
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
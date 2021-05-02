import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {submitProblem} from '../../actions/createProblemActions'

import {Button} from '@material-ui/core'


const CreateProblemSolution = () => {
    const dispatch = useDispatch()
    
    const createProblem = useSelector(state => state.createProblem)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(submitProblem(createProblem))
    }


    return (
        <div>
            Problem Solution
            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default CreateProblemSolution

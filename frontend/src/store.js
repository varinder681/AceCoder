import {createStore,combineReducers,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {userRegisterReducer,userLoginReducer} from './reducers/userReducer'
import {createProblemReducer,problemSubmitReducer} from './reducers/createProblemReducer'
import {getProblemReducer, getProblemsAllReducer} from './reducers/problemReducer'

const reducer = combineReducers({
    userRegister : userRegisterReducer,
    userLogin : userLoginReducer,
    createProblem : createProblemReducer,
    problemSubmit : problemSubmitReducer,
    getProblem : getProblemReducer,
    getProblemsAll : getProblemsAllReducer
})



const middleware = [thunk]

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
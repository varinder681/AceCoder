import {createStore,combineReducers,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {userRegisterReducer,userLoginReducer} from './reducers/userReducer'
import {createProblemReducer} from './reducers/createProblemReducer'

const reducer = combineReducers({
    userRegister : userRegisterReducer,
    userLogin : userLoginReducer,
    createProblem : createProblemReducer
})



const middleware = [thunk]

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
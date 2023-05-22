import axios from 'axios';
import { createStore, applyMiddleware, combineReducers} from 'redux'; 
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const history = []
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmount = 'account/incrementByAmount'; 
const init = 'account/init';
const getAccUserPending = 'acount/getAccAcoun/pending'
const getAccUserFulfilled = 'acount/getAccAcoun/fulfilled'
const getAccUserRejected = 'acount/getAccAcoun/rejected'


const increaseBonus = "bonus/increaseBonus"; 

// Store
const store = createStore(combineReducers({
    account: AccountReducer,
    bonus: bonusReducer
}), 
applyMiddleware(logger.default, thunk.default));


// reducer



function AccountReducer(state={amount:1}, action){
    switch(action.type){
        case inc: 
            return {amount: state.amount + 1}
        case dec:
            return {amount: state.amount - 1}
        case incByAmount:
            return {amount: state.amount + action.payload}
        case init: 
            return {anount: action.paylod}
        default: 
            return state;
    } 
}


function bonusReducer(state = {points: 0}, action){
    switch(action.type){
        case increaseBonus  :

        case incByAmount:
           if( action.payload > 100 )
                return {points: state.points +1}
            return { points: state.points + 1}
        default: 
            return state;
    }
}

// action creators 
function getUserAccount(id){
    return async(dispatch, getState)=> {
        const {data} = await axios.get(`http://localhost:3000/account/${id}`);
        dispatch(initUser(data.amount))
    }
    
}
function initUser(value){
    return {type: init, paylod:value}
}
function increment(){
    return {type: inc}
}
function decrement(){
    return {type: dec}
}
function incrementByAmount(value){
    return {type: incByAmount, payload: value}
}
function incrementBonus(){
    return {type: increaseBonus}
}

setTimeout(()=>{
    store.dispatch(getUserAccount(2))
    // store.dispatch(incrementByAmount(200))
    // store.dispatch(incrementBonus())
},2000)


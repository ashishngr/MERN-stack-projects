import { createStore} from 'redux'; 

// Store
const store = createStore(reducer);

// reducer
function reducer(state={amount:1}, action){
    return state;
}

// global state
console.log(store.getState());

{type: 'increment'}
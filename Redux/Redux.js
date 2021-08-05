import {createStore} from 'redux'

const store=createStore(buttonPress)

const initialState = { value: 0 }

function buttonPress(state=initialState,action){
    if(action.type==="increment"){
        return{...state,value:state.value+1};
    }
    else if(action.type==="decrement"){
        return{...state,value:state.value-1};
    }
    else return {value:0};
}

export default store;
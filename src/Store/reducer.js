
// var user={name:"Firasat Munir",email:"firasat@live.com"}

import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT } from "./action"

// var newUser={...user, name:"Saadat", age:24}

const initialState={
    counter:0
}
export const counterReducer=(state=initialState,action)=>{
    switch(action.type) {
        case INCREMENT :{
            return{...state,counter:state.counter+1}
        }     
        case DECREMENT :{
            return{...state,counter:state.counter-1}
        }
        case INCREMENT_BY_AMOUNT :{
            return{...state,counter:state.counter+action.payload}
        }
        default :{
            return state
        }
    }
}
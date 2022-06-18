import { combineReducers } from "redux";
import transactions from '../Data/data'


const transactionReducer = (state=transactions,action)=>{
    switch(action.type){
        case "DELETE":
            return state.filter(item=>item.id!==action.payload.id)
        case "ADD_TRANSACTION":
         return [action.payload,...state]
        default:
            return state
    }
}

const allReducers = combineReducers({
    transactionReducer
})

export default allReducers
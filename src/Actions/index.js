export const deleteTransaction = (item)=>{
    return{
        type:"DELETE",
        payload:item
    }
}

export const addTransaction =(item)=>{
    return{
        type:"ADD_TRANSACTION",
        payload:item
    }
}
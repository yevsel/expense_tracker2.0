import { useState } from "react";
import { useDispatch} from "react-redux";
import {addTransaction} from '../Actions'

const AddTransaction = () => {
    const [description,setDescription] = useState('')
    const [amount,setAmount] = useState(0)
    // const transactions = useSelector(state=>state.transactionReducer)
    const dispatch = useDispatch();

    return ( 
        <div>
            <p className="text-info text-monospace">ADD TRANSACTION</p>
            <form className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" onChange={(event)=>setDescription(event.target.value)} className="form-control" name="" id="description" />
                <label htmlFor="amount">Amount</label>
                <input type="number" onChange={(event)=>setAmount(event.target.value)} className="form-control" name="" id="amount" />
                <input type="submit" onClick={(event)=>{
                    event.preventDefault()
                    // console.log(typeof(amount))
                    let data = {
                        id:Math.round(Math.random()*1000),
                        description:description,
                        amount:Number(amount)
                    }
                    dispatch(addTransaction(data))
                }} value="ADD TRANSACTION" className="btn mt-3 w-100 btn-sm btn-primary" />
            </form>
        </div>
     );
}
 
export default AddTransaction;
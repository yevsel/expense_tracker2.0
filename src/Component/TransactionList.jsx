import { useSelector } from "react-redux";
import Transaction from "./Transaction";
import {deleteTransaction} from "../Actions"

const TransactionList = () => {
    const transactions = useSelector(state=>state.transactionReducer)
    return ( 
        <div>
            <p className="text-monospace text-info">HISTORY</p>
            {transactions.map(item=>{
                return <Transaction key={item.id} data={item} deleteTransaction={deleteTransaction}/>
            })}
        </div>
     );
}
 
export default TransactionList;
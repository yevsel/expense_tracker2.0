import { useSelector } from "react-redux";

const Balance = () => {
    
    const transactions = useSelector(state=>state.transactionReducer)
    // Calculate balance
    // Expense
    const expenses = transactions.filter(data=>data.description!=="Salary").map(item=>item.amount).reduce((item,total)=>item+total,0)
    const income = transactions.filter(data=>data.description.toLowerCase()==="salary").map(item=>item.amount).reduce((item,total)=>item+total,0)
    


    return ( 
        <div className="balance w-50 pb-2 m-auto text-center shadow rounded bg-secondary">
            <p className="m-0 text-light">BALANCE</p>
            <p className="text-monospace bg-success text-light w-50 m-auto  rounded">${(income-expenses).toFixed(2)}</p>
        </div>
     );
}
 
export default Balance;
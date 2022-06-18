import { useSelector } from "react-redux";

const IncomeAndExpense = () => {
    const transactions = useSelector(state=>state.transactionReducer)

    // Find income and expense
    const income = transactions.filter(item=>item.description.toLowerCase()==="salary").map(item=>item.amount).reduce((item,total)=>item+total,0)
    const expense = transactions.filter(item=>item.description.toLowerCase()!=='salary').map(item=>item.amount).reduce((item,total)=>item+total,0)

    return ( 
        <div className="text-center income-expense w-75 m-auto">
            <div className="income border rounded pb-3">
                <p className="text-success">INCOME</p>
                <p className="income-money bg-warning w-75 m-auto rounded">${(income).toFixed(2)}</p>
            </div>
            <div className="expense border rounded pb-3">
                <p className="text-danger">EXPENSE</p>
                <p className="expense-money bg-warning w-75 m-auto rounded">${(expense).toFixed(2)}</p>
            </div>
        </div>
     );
}
 
export default IncomeAndExpense;
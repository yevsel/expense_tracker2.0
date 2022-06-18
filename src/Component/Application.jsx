import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import IncomeAndExpense from "./IncomeAndExpense";
import TransactionList from "./TransactionList";

const Application = () => {

    return ( 
        <div className="application rounded shadow p-3">
            <h4 className="title text-center">EXPENSE TRACKER</h4>
            <hr />
            <Balance/>
            <hr className="w-25 bg-warning"/>
            <IncomeAndExpense/>
            <hr />
            <TransactionList/>
            <hr/>
            <AddTransaction/>
        </div>
     );
}
 
export default Application;
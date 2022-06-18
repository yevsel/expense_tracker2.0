import {FaTrash} from 'react-icons/fa'
import { useDispatch } from 'react-redux';

const Transaction = ({data,deleteTransaction}) => {

    const dispatch = useDispatch()

    return ( 
        <div className="transaction p-2 bg-light my-2 w-100 rounded">
            <div className='trash-description'>
                <FaTrash onClick={()=>{
                    dispatch(deleteTransaction(data))
                }} color="rgb(216, 147, 147)" cursor="pointer"/>
                <p className='m-0 pl-2'>{data.description}</p>
            </div>
            <p className='m-0 text-monospace bg-secondary rounded p-1 text-light w-25 text-right'>${(data.amount).toFixed(2)}</p>
        </div>
     );
}
 
export default Transaction;
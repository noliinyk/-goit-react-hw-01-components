import propTypes from "prop-types";
import TransactionHistory from "./TransactionHistory";
import s from '../Transactions/Transactions.module.css';

export default function TransactionTable({transactions}) {
    return(<table className={s.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
  {transactions.map ( transaction =>(
      <TransactionHistory
      key ={transaction.id}
      type= {transaction.type}
      amount = {transaction.amount}
      currency = {transaction.currency}/>
  ))}
    </tbody>
  </table>
        
    )
}
//========================== propTypes ===================
TransactionTable.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ),
};
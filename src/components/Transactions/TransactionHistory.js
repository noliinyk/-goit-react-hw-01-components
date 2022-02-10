import propTypes from "prop-types";

export default function TransactionHistory ({type, amount, currency}) {
    return (

    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
   
  
    )
}

TransactionHistory.propTypes ={
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
   currency:propTypes.string.isRequired,
}

  

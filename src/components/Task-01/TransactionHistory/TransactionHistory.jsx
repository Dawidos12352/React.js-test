import css from "./TransactionHistory.module.css"
import PropTypes from "prop-types"


export const TransactionHistory = ({items}) => {

    return(
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((el) => (
 <TransactionHistoryItem item={el} key={el.id}/>
      ))}
  </tbody>
</table>
    )
}

export const TransactionHistoryItem = ({item}) => {

    const { type, amount, currency} = item

    return(
        <tr >
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}
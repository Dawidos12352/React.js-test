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
    {items.map(el => (
        <TransactionHistoryItem items={el} key={el.id}/>
    ))}
  </tbody>
</table>
    )
}

const TransactionHistoryItem = ({items}) => {
    const {type, amount, currency} = items
    return(
        <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    )
}

TransactionHistory.propTypes = {
    items : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.string.isRequired,
            type : PropTypes.string.isRequired,
            amount : PropTypes.string.isRequired,
            currency : PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}
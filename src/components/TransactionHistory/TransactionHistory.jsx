import React from "react"
import css from "./TransactionHistory.module.css"
import PropTypes from "prop-types"


export const TransactionHistory = ({items}) => {
    return(
    <div className={css.box}>
        <table className={css.transactionHistory}>
  <thead className={css.header}>
    <tr>
      <th className={css.head}>Type</th>
      <th className={css.head}>Amount</th>
      <th className={css.head}>Currency</th>
    </tr>
  </thead>

  <tbody>
   {items.map(el => (
    
    <TransactionItem  transaction={el} key={el.id}/>
    
   ))}
  </tbody>
</table>
</div>

    )
}

const TransactionItem = ({transaction}) => {
  const {type, amount, currency } = transaction
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
      id :PropTypes.string.isRequired,
      type :PropTypes.string.isRequired,
      amount :PropTypes.string.isRequired,
      currency :PropTypes.string.isRequired,
    })
  ).isRequired

}
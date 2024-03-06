import React, {Component} from "react";
// import css from "./App.module.css"

//TASK 01

// import {Profile} from "./Task-01/Profile/Profile"
// import {Statistics} from "./Task-01/Statistics/Statistics"
// import {FriendList} from "./Task-01/FriendList/FriendList"
// import {TransactionHistory} from "./Task-01/TransactionHistory/TransactionHistory"

// import user from "./Task-01/Profile/user.json"
// import data from "./Task-01/Statistics/data.json"
// import friends from "./Task-01/FriendList/friends.json"
// import transactions from "./Task-01/TransactionHistory/transaction.json"


//  {/* TASK 01 */}
// export const App = () => {
//   return (
//     <div
//     style={{
//       height: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       fontSize: 40,
//       color: '#010101',
//       flexDirection: 'column',
//     }}
//     >
//       <div>
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//       <Statistics title="Upload stats" stats={data}/>\
//       <FriendList friends={friends} />
//       <TransactionHistory items={transactions} />
//       </div>     
//     </div>
//   );
// };


//TASK 02 FEEDBACK

import {Statistics} from "./Task-02-feedback/Statistics/Statistics"
import {FeedbackOptions} from "./Task-02-feedback/FeedbackOptions/FeedbackOptions"
import {Section} from "./Task-02-feedback/Section/Section"
import {Notification} from "./Task-02-feedback/Notification/Notification"
export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback() {
    const { good, neutral, bad} = this.state
    return good + bad + neutral
  }

  countPositiveFeedbackPercentage() {
    const totalCount = this.countTotalFeedback()
    return Math.round(( this.state.good * 100) / totalCount)
  }

  handleFeedback(type) {
    this.setState((prevState) => ({ [type] : prevState[type] + 1 }))
  }


  render(){

   const { good, neutral, bad} = this.state

   const totalFeedback = this.countTotalFeedback.call(this)
   const positivePercentage = this.countPositiveFeedbackPercentage.call(this)
   const handleFeedback = this.handleFeedback.bind(this)


    return(
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />
        ) : (
          <Notification message="There is no feedback" />
        )}
        
      </Section>
      

      </>
    )
  }
}



//TASK 02 PHONEBOOK


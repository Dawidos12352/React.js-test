import React from "react";

//TASK 01

// import {Profile} from "./Task-01/Profile/Profile"
// import {Statistics} from "./Task-01/Statistics/Statistics"
// import {FriendList} from "./Task-01/FriendList/FriendList"
// import {TransactionHistory} from "./Task-01/TransactionHistory/TransactionHistory"



// import user from "./Task-01/Profile/user.json"
// import data from "./Task-01/Statistics/data.json"
// import friends from "./Task-01/FriendList/friends.json"
// import transactions from "./Task-01/TransactionHistory/transaction.json"

export const App = () => {
  return (
    <div
    style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101',
      flexDirection: 'column',
    }}
    >
      <div>

        {/* TASK 01 */}
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>\
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
      </div>
      
    </div>
  );
};

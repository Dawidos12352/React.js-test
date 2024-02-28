import React from "react";

import { Profile } from "./Profile/Profile";
import {Statistics} from "./Statistics/Statistics";
import {TransactionHistory} from "./TransactionHistory/TransactionHistory";
import {FriendList} from "./FriendList/FriendList"




import user from "./Profile/user.json"
import data from "./Statistics/data.json"
import transaction from "./TransactionHistory/transaction.json"
import friends from "./FriendList/friends.json"




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
        <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <TransactionHistory items={transaction}/>
      <FriendList friends={friends}/>
      <Statistics title="Upload stats" stats={data}/>

     
     
      </div>
      
    </div>
  );
};

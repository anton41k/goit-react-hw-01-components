import { FriendList } from "components/frend-list/FriendList/FriendList";
import { Profile } from "components/social-profile/Profile/Profile";
import { Statistics } from "components/statistics/Statistics/";
import { TransactionHistory } from "components/transaction-history/TransactionHistory";

import friends from "./frend-list/friends.json";
import user from "./social-profile/user.json";
import statisticalData from "./statistics/statistical-data.json";
import transactions from "./transaction-history/transactions.json";

export const App = () => {
  return (
    <>
      <FriendList friends={friends} />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/*<Statistics title="Upload stats" stats={statisticalData} />*/}
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </>
  );
};

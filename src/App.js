import { Fragment } from 'react';
import 'normalize.css';
import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}

export default App;

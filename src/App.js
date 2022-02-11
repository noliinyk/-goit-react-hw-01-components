import User from './components/User/User';
import users from '../src/data/user.json';
import items from '../src/data/data.json';
import StatsList from './components/Statistics/StatsList';
import FriendsList from 'components/Friends/FriendsList';
import friends from '../src/data/friends.json';
import TransactionTable from 'components/Transactions/TransactionTabel';
import transactions from '../src/data/transactions.json';

export default function App() {
  return (
    <div>
      <User
        name={users.username}
        tag={users.tag}
        location={users.location}
        urlUser={users.avatar}
        stats={users.stats}
      />
      <StatsList title="Upload stats" items={items} />
      <FriendsList friends={friends} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

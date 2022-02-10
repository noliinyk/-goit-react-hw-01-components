import User from './components/User/User';
import users from './components/User/user.json';
import items from './components/Statistics/data.json';
import StatsList from './components/Statistics/StatsList'
import FriendsList from 'components/Friends/FriendsList';
import friends from './components/Friends/friends.json';
import TransactionTable from 'components/Transactions/TransactionTabel';
import transactions from './components/Transactions/transactions.json';

export default function App(){
    return (
    <div>
<User 
name={users.username}
tag={users.tag}
location={users.location}
quantityFollowers ={users.stats.followers}
quantityViews= {users.stats.views}
quantityLikes ={users.stats.likes}
urlUser={users.avatar}
/>
<StatsList title="Upload stats" items={items} />
<FriendsList friends={friends}/>
<TransactionTable transactions={transactions}/>
    </div>
    );

}
import User from './components/User/User';
import users from './components/User/user.json';
import data from './components/Statistics/data.json';
//import 

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
    </div>
    );

}
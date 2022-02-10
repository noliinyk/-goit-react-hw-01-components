import propTypes from "prop-types";
import FriendsListItem from "./FriendsListItem";
import s from '../Friends/Friends.module.css';

export default function FriendsList ({friends}) {
    return (
<ul className={s.friendsList}>
  {friends.map (friend =>(
      <FriendsListItem
      key = {friend.id}
      avatar ={friend.avatar}
      isOnline = {friend.isOnline}
      name={friend.name}
      />
  ))}
</ul>
    )
}
//========================== propTypes ===================
FriendsList.propTypes = {
    friends: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
      }),
    ),
  };
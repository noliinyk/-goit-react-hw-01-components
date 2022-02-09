
import FriendsListItem from "./FriendsListItem";

export default function FriendsList ({friends}) {
    return (
<ul class="friend-list">
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
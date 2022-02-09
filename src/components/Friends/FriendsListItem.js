import propTypes from "prop-types";

export default function FriendsListItem ({avatar, name, isOnline}) {
    return (
<li class="item">
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</li>
    )
}

FriendsListItem.propTypes ={
    name: propTypes.string.isRequired,
    avatar: propTypes.string,
    isOnline:propTypes.bool,
}
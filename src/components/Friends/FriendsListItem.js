import propTypes from "prop-types";
import s from '../Friends/Friends.module.css';

export default function FriendsListItem ({avatar, name, isOnline}) {
    return (
<li className={isOnline ? s.itemOnline : s.itemOffline}>
  <span className={s.status}>{isOnline}</span>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
</li>
    )
}

FriendsListItem.propTypes ={
    name: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    isOnline:propTypes.bool.isRequired,
}
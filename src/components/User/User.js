import PropTypes from "prop-types";
import s from '../User/User.module.css';

export default function User(props){
const {name,
 quantityFollowers,
  quantityViews,
   quantityLikes,
   tag,
location,
 urlUser
    } = props;
return (
<div className={s.profile}>
  <div className={s.description}>
    <img
      src={urlUser}
      alt="User avatar"
      className={s.avatar}
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{quantityFollowers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{quantityViews}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{quantityLikes}</span>
    </li>
  </ul>
</div>
);
}

User.propTypes={
name: PropTypes.string,
quantityFollowers: PropTypes.number,
quantityViews: PropTypes.number,
quantityLikes: PropTypes.number,
tag: PropTypes.string,
location: PropTypes.string,
urlUser: PropTypes.string,
};
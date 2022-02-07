import PropTypes from "prop-types";

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
<div class="profile">
  <div class="description">
    <img
      src={urlUser}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{name}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{quantityFollowers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{quantityViews}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{quantityLikes}</span>
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
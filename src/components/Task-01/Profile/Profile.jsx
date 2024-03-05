import css from "./Profile.module.css"
import PropTypes from "prop-types"


export const Profile = ({location, username, tag, avatar, stats}) => {

  return(
    <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

Profile.propTypes = {
  location : PropTypes.string.isRequired,
  tag : PropTypes.string.isRequired,
  username : PropTypes.string.isRequired,
  avatar : PropTypes.string.isRequired,
  stats : PropTypes.shape({
    followers : PropTypes.number.isRequired,
    views : PropTypes.number.isRequired,
    likes : PropTypes.number.isRequired,
  }).isRequired
  
}
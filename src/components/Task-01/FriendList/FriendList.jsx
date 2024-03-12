import css from "./FriendList.module.css"
import PropTypes from "prop-types"

export const FriendList = ({friends}) => {

    return(
        <ul className={css.friendList}>
            {friends.map(el => (
                <FriendListItem key={el.id} friends={el}/>
            ))}
        </ul>
    )
}

export const FriendListItem = ({friends}) => {

        const {avatar, name, isOnline, id} = friends
    return(
        <li className={css.item} key={id}>
            <span className={`${css.status} ${isOnline ? css.online : css.offline}`}>.</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}


FriendList.propTypes = {
    friends :  PropTypes.arrayOf(
        PropTypes.shape({
            avatar : PropTypes.string.isRequired,
            name : PropTypes.string.isRequired,
            isOnline : PropTypes.bool.isRequired,
            id : PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}
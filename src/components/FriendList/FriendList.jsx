import React from "react"
import css from "./FriendList.module.css"
import PropTypes from "prop-types"


export const FriendList = ({friends}) => {
    return(
        <div className={css.box}>
        <ul className={css.friendList}>
            {friends.map(el => (
                <FriendListItem key={el.id} friends={el}/>
            ))}
        </ul>
        </div>
    )
}

const FriendListItem = ({friends}) => {
    const {avatar, name,  isOnline} = friends
    return(
        <li className={css.item}>
            <span className={`${css.status} ${isOnline ? css.online : css.offline}`}>.</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendList.propTypes = {
    friends : PropTypes.arrayOf(
        PropTypes.shape({
            name : PropTypes.string.isRequired,
            avatar : PropTypes.string.isRequired,
            isOnline : PropTypes.bool.isRequired,
            id : PropTypes.number.isRequired,
        })
    )
}
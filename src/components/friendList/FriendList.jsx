import FriendListItem from '../friendListItem/FriendListItem';

import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;

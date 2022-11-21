import PropTypes from 'prop-types';
import {
  FriendSection,
  FriendListItem,
  StatusOnline,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendSection>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem key={id}>
            <StatusOnline isOnline={isOnline}>{isOnline}</StatusOnline>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
          </FriendListItem>
        );
      })}
    </FriendSection>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

import PropTypes from 'prop-types';
import {
  ProfileCard,
  Avatar,
  Info,
  Name,
  Stats,
  StatsItem,
  StatsNumber,
} from './Prolile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Info>
        <Avatar src={avatar} alt={`${username}'s avatar`} />
        <Name>{username}</Name>
        <p>{`@${tag}`}</p>
        <p>{location}</p>
      </Info>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <StatsNumber>{followers}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsNumber>{views}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsNumber>{likes}</StatsNumber>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};

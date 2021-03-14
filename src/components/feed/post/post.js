import React from 'react';
import { Avatar } from '@material-ui/core';
import './post.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import RepeatIcon from '@material-ui/icons/Repeat';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PropTypes from 'prop-types';

function Post({
  displayName,
  username,
  verified,
  timestamp,
  text,
  avatar,
  mainImage
}) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src={avatar} />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              {displayName}{' '}
              {verified && (
                <span className='post__headerSpecial'>
                  <VerifiedUserIcon className='post__badge' />
                </span>
              )}
              &nbsp;
              <span className='post__channel'>
                {username}
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>{text}</p>
          </div>
        </div>
        <img src={mainImage} alt={mainImage} />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
}

export default Post;

Post.propTypes = {
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
  timestamp: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
  mainImage: PropTypes.string.isRequired
};

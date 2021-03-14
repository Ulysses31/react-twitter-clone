import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import './tweetbox.css';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Enter image Url"
        />
        <Button className="tweetBox__tweetButton" variant="outlined">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

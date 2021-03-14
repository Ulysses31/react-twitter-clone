import React from 'react';
import './widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input type='text' placeholder='Search Twitter' />
      </div>
      <div className='widgets__widgetContainer'>
        <h2>What&apos;s happening</h2>
        <TwitterTweetEmbed
          tweetId={'1341072021099327489'}
        />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='reactjs'
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://facebook.com/react'}
          options={{
            test: '#reactjs is awesome',
            via: 'iordanidischr'
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;

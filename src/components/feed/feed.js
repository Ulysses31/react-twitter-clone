import React from 'react';
import './feed.css';
import Footer from '../footer/footer';
import Post from './post/post';
import TweetBox from './tweetbox/tweetbox';

const avat =
  'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png';

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
        <Footer />
      </div>
      <TweetBox />
      <Post
        displayName='Iordanidis Chris'
        username='@iordanidischr'
        timestamp='2 days ago'
        text='As 2020 comes to an end we wanted to share a special Holiday Update on our research into zero-bundle-size React Server Components. The demo is available now whether you want to play with it during the holiday, or when work picks back up in the new year.'
        avatar={avat}
        mainImage='https://pbs.twimg.com/media/EpxxzPPXUAE-iqM?format=jpg&name=small'
        verified
      />
      <Post
        displayName='Iordanidis Chris'
        username='@iordanidischr'
        timestamp='12 days ago'
        text='Please remember that you don’t need to learn any of this right now. We’re excited that there is a conversation about the early-stage research we have shared, but we promise all of this will be still here waiting for you after the holidays!'
        avatar={avat}
        mainImage=''
        verified
      />
      <Post
        displayName='Iordanidis Chris'
        username='@iordanidischr'
        timestamp='20 days ago'
        text='We expect that Next.js and other frameworks will incorporate Server Components in the future. They are different (but complementary) to the traditional server-side rendering that Next.js does today. Here is a comparison: https://news.ycombinator.com/item?id=25499171...'
        avatar={avat}
        mainImage=''
        verified
      />
      <Post
        displayName='Iordanidis Chris'
        username='@iordanidischr'
        timestamp='120 days ago'
        text='A special treat for everyone as we go on holiday and reflect upon the past year, a peek behind the curtain at how the React team works and all the invisible “failures” that build up to successes like Hooks and Server Components: https://react.christmas/2020/24...'
        avatar={avat}
        mainImage='https://pbs.twimg.com/media/Ep_hGWiXUAApe3E?format=jpg&name=small'
        verified
      />
      <Post
        displayName='Iordanidis Chris'
        username='@iordanidischr'
        timestamp='10 days ago'
        text='On Mar 13, join me and five tech industry veterans in this exploration of the relationship between doing and writing about tech, and learn why the future depends on you at...'
        avatar={avat}
        mainImage='https://pbs.twimg.com/card_img/1368891028833468416/yqySS2_7?format=png&name=small'
        verified
      />
    </div>
  );
}

export default Feed;

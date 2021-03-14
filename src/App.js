import React from 'react';
import './App.css';
import Feed from './components/feed/feed';
import Sidebar from './components/sidebar/sidebar';
import Widgets from './components/widgets/widgets';
// import Footer from "./components/footer/footer";

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Feed />
      <Widgets />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

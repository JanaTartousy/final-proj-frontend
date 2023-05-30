import React from 'react';
import "./PostPage.css"
import PostHero from '../../components/PostHero/PostHero.js';
import PostCards from '../../components/PostCards/PostCards';
import Navbar from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer.js';


function PostPage() {
  return (
    <div className='post-page-container'>
      <Navbar/>
        <PostHero/>
        <PostCards/>
        <Footer/>
    </div>
  )
}

export default PostPage
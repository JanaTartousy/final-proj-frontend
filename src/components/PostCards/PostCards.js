import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PostCards.css';

function PostCards() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/post`);
        setPosts(response.data.docs);
        console.log(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  
  return (
    <div className='post-card-wrapper'>
      <div className='post-card-img'>
        {posts.map((post) => (
          <div className='post-card-box' key={post._id}>
            <img src={post.image} alt={post.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostCards;

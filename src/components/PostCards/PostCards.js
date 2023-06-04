import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PostCards.css";

function PostCards() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/post`);
        setPosts(response.data.docs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-card-wrapper">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="post-card-img">
          {posts.map((post) => (
            <div className="post-card-box" key={post._id}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostCards;

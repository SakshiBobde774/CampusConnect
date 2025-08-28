// src/components/PostCard.js

import React from 'react';
import './Feed.css'; // Styling ke liye CSS file

// Icons ke liye (aap react-icons jaisi library use kar sakte hain)
// npm install react-icons
import { BiLike, BiComment, BiShare } from 'react-icons/bi';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.author.avatar} alt="avatar" className="post-avatar" />
        <div className="post-author-info">
          <span className="post-author-name">{post.author.name}</span>
          <span className="post-timestamp">{post.timestamp}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
        {post.imageUrl && <img src={post.imageUrl} alt="post content" className="post-image" />}
      </div>
      <div className="post-actions">
        <div className="action-button">
          <BiLike /> <span>Like</span>
        </div>
        <div className="action-button">
          <BiComment /> <span>Comment</span>
        </div>
        <div className="action-button">
          <BiShare /> <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
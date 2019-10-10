import React from 'react';
import '../style/blogs.css';
import articleIcon from '../assets/article.png';
import timeIcon from '../assets/time.png';
import reactionIcon from '../assets/reaction.png';
import commentsIcon from '../assets/comments.png';

const BlogInfo = ({ title, date, tags, url, reactions, comments, usename }) => {
  let colors = [
    '#eb345c',
    '#ac3483',
    '#eb3434',
    '#eba234',
    '#dceb34',
    '#37eb34'
  ]
  return (
    <div className="post_info">
      <div className="article_div">
        <img src={articleIcon} width="100px" height="100px" alt="article icon"></img>
      </div>
      <h3>{title}</h3>
      <div className="icon_grid">
        <label>
          <img src={timeIcon}></img>
          <p>{new Date(date).toDateString()}</p>
        </label>
        <label>
          <img src={reactionIcon}></img>
          <p>{reactions}</p>
        </label>
        <label>
          <img src={commentsIcon}></img>
          <p>{comments}</p>
        </label>
      </div>
      <div className="tags">
        {tags.map((tag, index) => (
          <p style={{background: colors[index]}} key={index}>#{tag}</p>
        ))}
      </div>
      <a href={url} target="_blank" className="read_more">Read More</a>
    </div>
  )
}

export default BlogInfo;
import React from 'react';
import '../style/blogs.css';

const BlogInfo = ({ title, date, tags, url, reactions, comments }) => {
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
        <i className="far fa-newspaper" style={{color: "black", fontSize: "60px"}}></i>
      </div>
      <h3>{title}</h3>
      <div className="icon_grid">
        <label>
          <i className="fas fa-calendar-alt" style={{ color: "yellow"}}></i>
          <p>{new Date(date).toDateString()}</p>
        </label>
        <label>
          <i className="fas fa-heart" style={{ color: "cyan" }}></i>
          <p>{reactions}</p>
        </label>
        <label>
          <i className="fas fa-comment-alt" style={{ color: "pink" }}></i>
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
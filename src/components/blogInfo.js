import React from 'react';

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
        <i className="far fa-file-alt" style={{color: "black", fontSize: "60px"}}></i>
      </div>
      <h3>{"`" + title.toUpperCase() + "`"}</h3>
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
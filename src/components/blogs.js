import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogInfo from './blogInfo';

const Blogs = () => {
  const [postData, setPostData] = useState([])
  const [activePost, setActivePost] = useState(0)
  useEffect(() => {
    function fetchPost() {
      const url = 'https://dev.to/api/articles?username=uddeshjain'
      axios.get(url).then(result =>
        setPostData(result.data)
      ).catch(e => console.log(e))
    }
    fetchPost()
  }, []);

  const postClickHandler = (event) => {
    setActivePost(event.currentTarget.id)
  }

  return (
    <div className="post_container">
      <h1>Here are few posts</h1>
      <div className="post_all">
        <h2>Here are few posts</h2>
        <div className="post_list">
          <ul>
            {postData.map((data, index) => (
              <li
                className={index == activePost ? "active_post" : ""}
                id={index}
                onClick={postClickHandler}
                key={index}>
                {data.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {postData[activePost] ? 
        <BlogInfo
          title={postData[activePost].title}
          date={postData[activePost].published_at}
          tags={postData[activePost].tag_list}
          url={postData[activePost].url}
          reactions={postData[activePost].positive_reactions_count}
          comments={postData[activePost].comments_count}
          usename={postData[activePost].user.name}
        />
        : null
      }
    </div>
  )
}

export default Blogs;
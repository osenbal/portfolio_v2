import React, { useEffect, useState } from "react";
import axios from "./api-blogger";
import Image1 from "../../../assets/images/svg/blog-1.svg";
import Image2 from "../../../assets/images/svg/blog-2.svg";
import Image3 from "../../../assets/images/svg/blog-3.svg";

import "./index.css";

function Blog() {
  const [posts, setPosts] = useState(null);
  const [imgPost, setImgPost] = useState([]);

  const getBlogPost = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BLOG_ID}/posts?maxResults=3&key=${process.env.REACT_APP_BLOG_API_KEY}`
    );
    setPosts(response.data.items);
  };
  useEffect(() => {
    try {
      getBlogPost();
      setImgPost([Image1, Image2, Image3]);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Post</h2>
      <div className="blog__container grid">
        {posts ? (
          posts.map((post, index) => (
            <div key={index} className="blog__card">
              <div className="blog__thumb">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={`https://www.osenbal.my.id/search/label/${[
                    post.labels[0],
                  ]}?&max-results=8`}
                >
                  <span className="blog__category">{post.labels[0]}</span>
                </a>
                <a href={post.url} target="_blank" rel="noreferrer noopener">
                  <img src={imgPost[index]} alt="blog" className="blog__img" />
                </a>
              </div>
              <div className="blog__details">
                <h3 className="blog__title">{post.title}</h3>
                <div className="blog__meta">
                  <span>
                    {new Date(post.updated).toLocaleDateString("en-GB", {
                      day: "numeric",
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                  <span className="blog__dot">.</span>
                  <span>Iqbal</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>No latest post</h3>
        )}
      </div>
    </section>
  );
}

export default Blog;

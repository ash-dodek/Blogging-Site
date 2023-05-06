import React from 'react'
import '../css/BlogItems/blog-card.css'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (<>
    <div className="blog-card">
      <div className="card-image">
        {/* <img src="https://source.unsplash.com/random/500x350" alt="Blog Image"/> */}
      </div>
      <div className="card-content">
        <h3 className="card-title">Blog Title</h3>
        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to="/" className="card-link">Read more</Link>
      </div>
    </div>

  </>)
}

export default BlogCard

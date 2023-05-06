import React from 'react'
import BlogCard from './BlogCard'
import TitleHead from './TitleHead'
import '../css/home.css'

const HomePage = () => {
  return (
    <div>
      <TitleHead title="Trending"/>
      <div className="title-head-content">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        
      </div>
      <TitleHead title="Latest"/>
      <div className="title-head-content">

      <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  )
}

export default HomePage

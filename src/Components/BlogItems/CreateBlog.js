import React, { useState } from 'react'
import '../../css/BlogItems/create-blog-page.css'

const CreateBlog = () => {

  const [blog, setBlog] = useState({})

  const onChange = (e)=>{
    
    setBlog({...blog,[e.target.name]:e.target.value})
    console.log(blog)
  }

  const submitBlog = (e)=>{
    e.preventDefault()
    console.log(blog)
    //add api calls
  }

  return (
    <div>
      <div className="create-blog">
      <h1 style={{textAlign:"center"}}>Title</h1>
      <div className="main-cont">
        <form>
          <label htmlFor="title">Title:</label>
          <input onChange={onChange} type="text" id="title" name="title" placeholder="Enter Your Title" required/>
          <label htmlFor="description">Blog Content:</label>
          <textarea onChange={onChange} id="description" name="description" placeholder="Enter Your Description" rows="6" required></textarea>
          <div className="submit-btn">
            <button onClick={submitBlog} id='submitButton'>Submit</button>
          </div>
        </form>
      </div>
    </div>

    </div>
  )
}

export default CreateBlog

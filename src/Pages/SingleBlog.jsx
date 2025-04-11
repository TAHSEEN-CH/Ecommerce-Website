import React from 'react'
import SingleHero from '../Components/SingleBlog/SingleHero'
import BlogSection from '../Components/SingleBlog/BlogSection';
import LeaveComment from '../Components/SingleBlog/LeaveComment';

const SingleBlog = () => {
  return (
    <div>
      <SingleHero/>
      <BlogSection/>
      <LeaveComment/>
    </div>
  )
}

export default SingleBlog;

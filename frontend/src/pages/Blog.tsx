// import React from 'react'
import AppBar from '../components/AppBar'
import BlogCard from '../components/BlogCard'
import { useBlogs } from '../hooks'

function Blog() {
  const {loading,blogs} = useBlogs();

  if(loading){
    return <div> Loading...</div>
  }
  return (
    <>
    
    <AppBar/>
    <div className='max-w-screen-sm m-auto font-serif'>
      <BlogCard 
       authorName = "Jatt"
       title = "How an ugly single page website maeks $5000 a month without affiliate marketting"
       content =" Kunal Sarpal The top 5 in world in the field of compute science"
       publishedDate = "2024-12-12"
      />
      <BlogCard 
       authorName = "Jatt"
       title = "I am world greates man"
       content =" Kunal Sarpal The top 5 in world in the field of compute science"
       publishedDate = "2024-12-12"
      />
      <BlogCard 
       authorName = "Jatt"
       title = "I am world greates man"
       content =" Kunal Sarpal The top 5 in world in the field of compute science"
       publishedDate = "2024-12-12"
      />
    </div>
    
    </>
  )
}

export default Blog
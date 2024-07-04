// import React from 'react'
import AppBar from '../components/AppBar'
import BlogCard from '../components/BlogCard'
import { useBlogs } from '../hooks'
import Skelton from './Sketon';

function Blog() {
  const {loading,blogs} = useBlogs();

  if(loading){
    return <div><Skelton/></div>
  }
  return (
    <>
    <AppBar/>
    <div className='max-w-screen-sm m-auto font-serif'>

    {blogs.map(blog => (
    <BlogCard 
        key={blog.id}
        id={blog.id} // Assuming blog has an id for key uniqueness
        authorName={blog.author?.name ?? "Anonyums"} // Nullish coalescing operator for optional chaining
        title={blog.title}
        content={blog.content}
        publishedDate={
            <span>
                {new Date(blog.createdAt).toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true
                })}
            </span>
        }
    />
))}

     
    
    </div>
    
    </>
  )
}

export default Blog
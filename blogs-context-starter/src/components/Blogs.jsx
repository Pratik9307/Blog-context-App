import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';
import './Blogs.css'

 const Blogs = () => {
// Consume data

const {posts,loading}=useContext(AppContext);  

  return (
    <div className='w-4/12 flex flex-col justify-center items-center ml-[500px]'>
    {
      loading ? 

      (<Spinner/>):
      (
        posts.length ===0 ? (<div>
          <p> No post Found</p>
        </div>) :
         (posts.map((post)=>(
          <div key={post.id} >
             <p className='Title font-bold text-lg text-black mt-7'> { post.title}</p>
             <p className='mt-2'>
              By <span className='italic'>{post.author}</span>on <span className='underline font-bold'>{post.category}</span>
             </p>
             <p> Posted on {post.date}</p>
             <p className='mt-3'>{post.content}</p>
             <div className='mt-3 underline-blue '>
             { post.tags.map((tag)=>{
                return <span className='text-blue-600 font-medium gap-5 '> {`#${tag}`}</span>
                  
     })}
             </div>
          </div>
         )))
      )
    }

    </div>
  )
}
export default Blogs;

import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Blog from '../model/Blog'

const Posts = (props) => {

  console.log(props.blogs[0].image)

  return (
    <div>
      <section className="bg-[#202023] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl font-bold text-gray-300 mb-8">All Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">

            {props.blogs.map((blog)=>{
              return <div className="shadow-lg rounded-lg overflow-hidden">
              <Link href='/Blogs/blog1'>
                <img src={blog.image} alt="" className="block w-full h-48 bg-gray-400"/>
              </Link>
              <div className="p-4">
                <a href="#" className="font-bold text-xl mb-2">{blog.title}</a>
                <p className="text-gray-300 text-base">{blog.body}</p>
              </div>
              <div className="py-2 px-4">
                <a href="#" className="inline-block bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition duration-150 ease-in-out">Read More</a>
              </div>
            </div>}) }

          </div>
        </div>
      </section>

    </div>
  )
}


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)
  }
  let blogs = await Blog.find()
  blogs = blogs.reverse()
  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) }
  }
}

export default Posts
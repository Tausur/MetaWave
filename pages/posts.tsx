import React from 'react'
import Link from 'next/link'

const Posts = () => {
  return (
    <div>
      <section className="bg-[#202023] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl font-bold text-gray-300 mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
            <div className="shadow-lg rounded-lg overflow-hidden">
              <a href='/Blogs/blog1' className="block w-full h-48 bg-gray-400"></a>
              <div className="p-4">
                <a href="#" className="font-bold text-xl mb-2">Blog Post Title</a>
                <p className="text-gray-300 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel dolor ut mi fringilla fringilla ut non turpis. Mauris malesuada, lacus ut lobortis euismod, ex turpis ullamcorper mauris, eu dignissim velit libero vel mauris.</p>
              </div>
              <div className="py-2 px-4">
                <a href="#" className="inline-block bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition duration-150 ease-in-out">Read More</a>
              </div>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden">
              <a href="#" className="block w-full h-48 bg-gray-400"></a>
              <div className="p-4">
                <a href="#" className="font-bold text-xl  mb-2">Blog Post Title</a>
                <p className="text-gray-300 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel dolor ut mi fringilla fringilla ut non turpis. Mauris malesuada, lacus ut lobortis euismod, ex turpis ullamcorper mauris, eu dignissim velit libero vel mauris.</p>
              </div>
              <div className="py-2 px-4">
                <a href="#" className="inline-block bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition duration-150 ease-in-out">Read More</a>
              </div>
            </div>
            <div className="shadow-lg rounded-lg overflow-hidden">
              <a href="#" className="block w-full h-48 bg-gray-400"></a>
              <div className="p-4">
                <a href="#" className="font-bold text-xl  mb-2">Blog Post Title</a>
                <p className="text-gray-300 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel dolor ut mi fringilla fringilla ut non turpis. Mauris malesuada, lacus ut lobortis euismod, ex turpis ullamcorper mauris, eu dignissim velit libero vel mauris.</p>
              </div>
              <div className="py-2 px-4">
                <a href="#" className="inline-block bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition duration-150 ease-in-out">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Posts
import React from 'react'
import Typical from 'react-typical'

const HomePage = (props: { theme: any }) => {
  return (
    <div className='w-2/3 mx-auto pt-16 pb-10'>
      <div className='flex items-center'>
        <div className="profile bg-blue-500 rounded-full flex justify-center items-center mx-5 mb-3">
          <img src="/profile.jpg" alt="" className='rounded-full w-48 h-48 border-2 border-white pointer-events-none' />
        </div>
        <div className="typewriter">
          <p className='text-2xl'>{"Hi, I'm Tausur Rahaman"}</p>
            <Typical
              steps={["I'm a developer", 2000, "I'm a designer", 2000, "I'm a scientist", 2000]}
              loop={Infinity}
              wrapper="b"
            />
        </div>
      </div>

      <div className="bio">
        Bio
      </div>
    </div>
  )
}

export default HomePage

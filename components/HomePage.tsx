import React from 'react'
import Typewriter from 'typewriter-effect'

const HomePage = (props: { theme: any }) => {
  return (
    <div className='mx-auto py-6 text-white'>

      <div className="bio">
        <section className="md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between md:px-20">
              <div className="md:w-1/2 ">
                <h1 className="text-4xl font-bold leading-tight mb-4">Hi, I'm Tausur Rahaman</h1>
                <code className='text-xl'>
                  <Typewriter
                    options={{
                      strings: [
                        "Web developer",
                        "Game developer",
                        "UI/UX developer"
                      ],
                      autoStart: true,
                      loop: true
                    }}
                  />
                </code>
                <p className="text-gray-400 mb-4 mt-2">I'm a web developer with a passion for building beautiful, responsive websites.</p>
                <a href="#" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">View my work</a>
              </div>
              <div className="md:w-1/4 w-1/2 mt-8 mx-auto">
                <img src="/profile.jpg" alt="Profile Picture" className="rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md">
              <img src="https://via.placeholder.com/800x500" alt="Blog Post Image" className="rounded-t-lg object-cover w-full h-48" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lorem Ipsum Dolor Sit Amet</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                <a href="#" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img src="https://via.placeholder.com/800x500" alt="Blog Post Image" className="rounded-t-lg object-cover w-full h-48" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lorem Ipsum Dolor Sit Amet</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                <a href="#" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img src="https://via.placeholder.com/800x500" alt="Blog Post Image" className="rounded-t-lg object-cover w-full h-48" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lorem Ipsum Dolor Sit Amet</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                <a href="#" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Web Design</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                <a href="#" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">Learn More</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                <a href="#" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">Learn More</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Search Engine Optimization</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                <a href="#" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">Learn More</a>
              </div>
            </div>

          </div>

        </div>
      </section>


      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-8">Have a question or want to get in touch? Fill out the form below and we'll be in touch soon.</p>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows={5} placeholder="Your Message"></textarea>
                </div>
                <div className="mb-4">
                  <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700" type="submit">Send Message</button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-700 mb-8">We'd love to hear from you. Please feel free to get in touch with us using any of the following methods:</p>
              <div className="flex items-center mb-4">
                <svg className="h-8 w-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"></path>
                </svg>
                <p className="text-gray-700 ml-4">(123) 456-7890</p>
              </div>
              <div className="flex items-center mb-4">
                <svg className="h-8 w-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h.01"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7-7 0 0-7 7m14 0l-7-7 0 0-7 7"></path>
                </svg>
                <a href="mailto:info@yourwebsite.com" className="text-gray-700 ml-4">info@yourwebsite.com</a>
              </div>
              <div className="flex items-center mb-4">
                <svg className="h-8 w-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l7-7 0 0-7-7-7 7 0 0 7 7z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14.5a2.5 2.5 0 015 0v.01"></path>
                </svg>
                <p className="text-gray-700 ml-4">123 Main St. Suite 100
                <br/>
                Anytown, USA 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage

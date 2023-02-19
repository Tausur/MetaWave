import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="bg-[#202023] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold  mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold  mb-4">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block  font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" className="form-input w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block -700 font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" className="form-input w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block -700 font-medium mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="form-textarea w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">Send Message</button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-bold -900 mb-4">Find Us</h3>
              <p className="-700 mb-4">123 Main Street<br/>New York, NY 10001</p>
              <div className="mb-4">
                <h4 className="text-lg font-medium -900 mb-2">Email</h4>
                <p className="-700">info@example.com</p>
              </div>
              <div>
                <h4 className="text-lg font-medium -900 mb-2">Phone</h4>
                <p className="-700">1-800-555-5555</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
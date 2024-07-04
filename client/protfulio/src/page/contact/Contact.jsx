import React from 'react';

const Contact = () => {
  return (
    <div className=' mx-7'>
      
  <div className="contact-form mt-16 flex flex-wrap justify-between items-center">
    <form className="w-full md:w-1/2 space-y-8">
      <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2 px-2">
          <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" placeholder="First Name" />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" placeholder="Last Name" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2 px-2">
          <input type="email" className="form-control w-full p-2 border border-gray-300 rounded" placeholder="E-mail" />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" placeholder="Phone" />
        </div>
      </div>
      <div>
        <textarea rows="5" placeholder="Message" className="form-control w-full p-2 border border-gray-300 rounded"></textarea>
      </div>
      <div>
        <input type="submit" className="send-btn w-full p-2 bg-blue-500 text-white rounded cursor-pointer" value="Send Message" />
      </div>
    </form>
    <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <img src="/contact-png.png" alt="Contact" className="w-12/12" />
    </div>
  </div>


    </div>
  )
}

export default Contact;

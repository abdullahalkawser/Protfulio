import React from 'react';

export default function ContactPage() {
  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left Section - Contact Form */}
      <div className="w-1/2 bg-gradient-to-b from-blue-600 to-purple-600 text-white p-12 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">Contact</h1>
        <p className="mb-8 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
        </p>
        <form className="space-y-6">
          <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-white placeholder-white focus:outline-none" />
          <input type="email" placeholder="E-mail" className="w-full bg-transparent border-b border-white placeholder-white focus:outline-none" />
          <textarea placeholder="Message" className="w-full bg-transparent border-b border-white placeholder-white focus:outline-none h-24"></textarea>
          <button type="submit" className="bg-pink-400 text-white py-2 px-6 rounded-full w-32 hover:bg-pink-500">Submit</button>
        </form>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-1/2 flex items-center justify-center relative">
        <img src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg" alt="Contact Illustration" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

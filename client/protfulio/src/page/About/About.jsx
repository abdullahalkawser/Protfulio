import React from 'react';

const About = () => {
  const data = [
    {
      id: 1,
      name: 'Web Design',
      des: 'The most modern and hilgh-quality design made at a professional level.',
      img: 'https://cdn-icons-png.flaticon.com/512/2985/2985655.png'
    },
    {
      id: 2,
      name: 'Web Development',
      des: 'High-quality web development with modern technologies.',
      img: 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png'
    },
    {
      id: 3,
      name: 'Mobile Apps',
      des: 'The most modern and high-quality design made at a professional level.',
      img: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'
    },
    {
      id: 4,
      name: 'Photography Apps',
      des: 'High-quality photography applications with advanced features.',
      img: 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
    }
  ];

  return (
    <div className='sm:px-10 px-4 py-10'>
      <div>
        <h1 className='text-3xl font-bold'>About</h1>
        <p className='mt-4'>
          Hi! I'm a software engineer. I'm a self-driven programmer who loves taking on challenges and solving complex problems in day-to-day life.
        </p>
        <p className='mt-5'>
          My journey in the world of technology systems and platforms is an exciting blend of academic learning and practical application. This role combines technical expertise with problem-solving skills to create efficient and reliable software solutions that meet the needs of users and organizations.
        </p>
      </div>

      <div className='mt-10'>
        <h2 className='text-2xl font-semibold'>What I'm Doing</h2>

        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {data.map((item) => (
            <div key={item.id} className='p-4 border rounded-lg shadow-md hover:bg-orange-400'>
              <img src={item.img} alt={item.name} className='w-16 h-16 mb-4' />
              <h3 className='text-xl font-bold'>{item.name}</h3>
              <p className='mt-2'>{item.des}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className='mt-10'>
        <h2 className='text-2xl font-semibold'>Testimonials</h2>
        
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='p-4 border rounded-lg shadow-md'>
            <h3 className='text-xl font-bold'>Emily Evans</h3>
            <p className='mt-2'>Richard was hired to create a corporate identity. We were very pleased with the work.</p>
          </div>

          <div className='p-4 border rounded-lg shadow-md'>
            <h3 className='text-xl font-bold'>John Doe</h3>
            <p className='mt-2'>Richard's development skills are top-notch. He delivered our project on time and exceeded our expectations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';

const timelineData = [
  {
    date: '20-08-2019',
    icon: 'lni-cake',
    title: 'Birthday',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!',
    type: 'type1',
  },
  {
    date: '20-08-2019',
    icon: 'lni-burger',
    title: 'Lunch',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!',
    type: 'type2',
  },
  {
    date: '20-08-2019',
    icon: 'lni-slim',
    title: 'Exercise',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!',
    type: 'type3',
  },
  {
    date: '20-08-2019',
    icon: 'lni-cake',
    title: 'Birthday',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!',
    type: 'type1',
  }
];

const Blog = () => {
  return (
    <div className="timeline flex flex-col items-center mx-auto relative">
      {timelineData.map((item, index) => (
        <div key={index} className={`timeline__event animated fadeInUp delay-${index}s timeline__event--${item.type} flex items-center relative mb-10`}>
          <div className="timeline__event__icon flex items-center justify-center text-white p-4 rounded-full bg-yellow-500 shadow-lg relative z-10">
            <i className={item.icon}></i>
          </div>
          <div className={`timeline__event__content p-4 bg-white shadow-lg rounded-lg ml-4 ${index % 2 ? 'order-1' : ''}`}>
            <div className="timeline__event__date text-yellow-500 font-bold mb-2">{item.date}</div>
            <div className="timeline__event__title font-bold text-xl mb-2">{item.title}</div>
            <div className="timeline__event__description">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;

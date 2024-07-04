import React from 'react';

const timelineData = [
  {
    date: 'July 8',
    title: 'Fully responsive timeline you can add to your UIkit 3 project',
    label: 'FEATURE',
    labelColor: 'bg-green-100 text-green-600'
  },
  {
    date: 'July 7',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    label: 'TEST',
    labelColor: 'bg-orange-100 text-orange-600'
  }
];

const Timeline = () => {
  return (
    <div className="timeline flex flex-col items-start mx-auto relative max-w-4xl p-6 bg-pink-50">
      <h2 className="text-2xl font-light mb-8">UIkit 3 CSS Timeline</h2>
      {timelineData.map((item, index) => (
        <div key={index} className="timeline__event flex mb-8 w-full">
          <div className="timeline__event__icon flex items-center justify-center text-white p-2 rounded-full shadow-lg bg-blue-500 relative z-10 mr-4">
            <span className="text-2xl">✔</span>
          </div>
          <div className="timeline__event__content flex-grow bg-white shadow-md p-6  relative">
            <div className={`absolute top-2 right-2 px-2 py-1 rounded ${item.labelColor}`}>
              {item.label}
            </div>
            <div className="timeline__event__date text-gray-500 mb-2">{item.date}</div>
            <div className="timeline__event__title font-bold text-gray-800 mb-2">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

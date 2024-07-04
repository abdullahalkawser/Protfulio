import React from 'react';
import { MdOutlineCastForEducation } from "react-icons/md";

const educationData = [
  {
    school: 'University School Of The Arts',
    period: '2007 — 2008',
    description: 'Nemo enim ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
    icon: <MdOutlineCastForEducation />
  },
  {
    school: 'New York Academy Of Art',
    period: '2006 — 2007',
    description: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..',
    icon: <MdOutlineCastForEducation />
  },
  {
    school: 'High School Of Art And Design',
    period: '2002 — 2004',
    description: 'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.',
    icon: <MdOutlineCastForEducation />
  }
];

const Resume = () => {
  return (
    <div className=" text-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 flex gap-2 items-center">
        <MdOutlineCastForEducation className="text-amber-400" /> Education
      </h2>
      <div className="relative border-l-2 border-yellow-500 pl-5">
        {educationData.map((item, index) => (
          <div key={index} className="mb-8 pl-5 relative">
            <div className="absolute left-0 top-0 transform -translate-x-8 translate-y-1/2">
              <span className="block w-6 h-6 bg-white rounded-full"></span>
            </div>
            <h3 className="text-2xl font-semibold">{item.school}</h3>
            <span className="text-gray-400">{item.period}</span>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;

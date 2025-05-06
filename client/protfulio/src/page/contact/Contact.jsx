import React, { useState } from 'react';


const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    intro: '',
    interest: '',
    budget: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-4">WE WANT TO GET TO KNOW YOU 😊</h2>
            <p className="text-sm text-yellow-300 mb-2">SOUNDS GOOD! ⭐ ANYTHING ELSE YOU WANT US TO KNOW?</p>
            <textarea
              name="intro"
              value={formData.intro}
              onChange={handleChange}
              className="w-full h-32 p-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-400 focus:outline-none"
              placeholder="This is optional... or go ahead and write a 5-page essay (MLA format of course 🥳)"
            />
            <div className="flex justify-between w-full mt-6">
              <button className="px-6 py-2 text-white rounded-full border border-white opacity-50">PREVIOUS</button>
              <button onClick={nextStep} className="px-6 py-2 bg-white text-purple-600 rounded-full">SEND</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-4">WE WANT TO GET TO KNOW YOU 😊</h2>
            <p className="text-sm text-yellow-300 mb-4">NICE NAME! ⭐ WHAT BEST EXPLAINS YOU?</p>
            <div className="grid grid-cols-3 gap-4">
              {['Products', 'Services', 'SaaS', 'Personality', 'Other'].map((option) => (
                <button
                  key={option}
                  name="interest"
                  value={option}
                  onClick={() => {
                    setFormData({ ...formData, interest: option });
                    nextStep();
                  }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-sm font-semibold ${
                    formData.interest === option ? 'bg-white text-purple-600' : 'bg-black bg-opacity-50 text-white'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between w-full mt-6">
              <button onClick={prevStep} className="px-6 py-2 text-white rounded-full border border-white">PREVIOUS</button>
              <button onClick={nextStep} className="px-6 py-2 bg-white text-purple-600 rounded-full">NEXT</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-4">WE WANT TO GET TO KNOW YOU 😊</h2>
            <p className="text-sm text-yellow-300 mb-4">NICE! ⭐ WHAT'S YOUR MONTHLY BUDGET?</p>
            <div className="grid grid-cols-3 gap-4">
              {['$1K-2K/mo', '3K-4K/mo', '5K-7K/mo', '8K+/mo', 'Other'].map((option) => (
                <button
                  key={option}
                  name="budget"
                  value={option}
                  onClick={() => {
                    setFormData({ ...formData, budget: option });
                    nextStep();
                  }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-sm font-semibold ${
                    formData.budget === option ? 'bg-white text-purple-600' : 'bg-black bg-opacity-50 text-white'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between w-full mt-6">
              <button onClick={prevStep} className="px-6 py-2 text-white rounded-full border border-white">PREVIOUS</button>
              <button onClick={nextStep} className="px-6 py-2 bg-white text-purple-600 rounded-full">NEXT</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-4">THANK YOU FOR SUBMITTING, WE'RE EXCITED TO CHAT!</h2>
            <p className="text-sm text-white mb-4">WE WILL REACH OUT TO YOU SOON!</p>
            <button onClick={() => setStep(1)} className="px-6 py-2 bg-white text-purple-600 rounded-full">CLOSE</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-20">
      <div className="relative bg-white bg-opacity-10 rounded-2xl p-8 w-full max-w-md">
        <div className="absolute top-4 right-4 text-white">{`0${step}/04`}</div>
        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepForm;
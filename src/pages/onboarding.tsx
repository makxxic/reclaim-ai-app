import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const steps = [
  {
    title: 'Welcome to Jenga',
    description:
      'A secure space to collect and manage evidence of digital abuse. Your safety is our priority.',
  },
  {
    title: 'Easy Evidence Upload',
    description:
      'Upload screenshots, screen recordings, and other files directly from your device. We will guide you through the process.',
  },
  {
    title: 'Set Your Security PIN',
    description:
      'Create a PIN to protect your account. You can also use biometrics for faster access.',
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.success('Onboarding complete!');
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center'>
        <h2 className='text-2xl font-bold mb-4'>{steps[currentStep].title}</h2>
        <p className='text-gray-600 mb-8'>{steps[currentStep].description}</p>

        {currentStep === 2 && (
          <div className='mb-4'>
            <input
              type='password'
              maxLength={4}
              className='w-full px-4 py-2 border rounded-lg text-center tracking-[1em] focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='_ _ _ _'
            />
          </div>
        )}

        <div className='flex justify-center items-center space-x-2 mb-8'>
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentStep === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>

        {currentStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'
          >
            Next
          </button>
        ) : (
          <Link
            to='/dashboard'
            className='w-full block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg'
          >
            Go to Dashboard
          </Link>
        )}
      </div>
    </div>
  );
}
import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="School building"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      
      <div className="relative">
        <div className="container mx-auto px-4 py-32 sm:py-48">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Welcome to Rolex Academy
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              A place where excellence in education and holistic development come together. 
              Our commitment is to nurture young minds to become tomorrow's leaders.
            </p>
            <div className="space-x-4">
              <a
                href="#programs"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Our Programs
              </a>
              <a
                href="#contact"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
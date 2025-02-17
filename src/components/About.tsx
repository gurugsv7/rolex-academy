import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
            Founded in 2000, Rolex Academy is one of the leading educational
            institutions in Learning City. We are dedicated to providing a balanced
            education that integrates academics, sports, arts, and character development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">20+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Years of Excellence</h3>
            <p className="text-gray-600">Providing quality education since 2000</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">100+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
            <p className="text-gray-600">Dedicated teachers shaping future leaders</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">95%</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
            <p className="text-gray-600">Consistent academic excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
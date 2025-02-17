import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { BookOpen, Users, Trophy, Star, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Rolex Academy</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-8">
              Founded in 2000, Rolex Academy is one of the leading educational institutions
              committed to nurturing young minds and shaping future leaders.
            </p>
            <Link
              to="/about"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2000+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Expert Faculty</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Awards Won</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Discover our comprehensive range of academic programs designed to nurture
              excellence at every stage of learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
                alt="Primary Education"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Primary Education</h3>
                <p className="text-gray-600 mb-4">Building strong foundations through engaging and interactive learning experiences.</p>
                <Link to="/programs" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3"
                alt="Secondary Education"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Secondary Education</h3>
                <p className="text-gray-600 mb-4">Comprehensive curriculum focused on academic excellence and personal growth.</p>
                <Link to="/programs" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3"
                alt="Extra Curricular"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Extra Curricular</h3>
                <p className="text-gray-600 mb-4">Diverse activities promoting talent development and holistic growth.</p>
                <Link to="/programs" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/programs"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6">"The teachers at Rolex Academy are incredibly dedicated. They go above and beyond to ensure every student succeeds."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
                  alt="Student"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Class of 2023</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6">"The facilities and opportunities here are exceptional. I've grown so much both academically and personally."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
                  alt="Student"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-gray-500 text-sm">Class of 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6">"The supportive environment and excellent curriculum have helped me achieve my academic goals."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3"
                  alt="Student"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">Emily Davis</h4>
                  <p className="text-gray-500 text-sm">Class of 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1543505298-b8be9b52a21a?ixlib=rb-4.0.3"
                alt="Science Fair"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-blue-600 text-sm mb-2">March 15, 2024</p>
                <h3 className="text-xl font-bold mb-2">Annual Science Fair Winners Announced</h3>
                <p className="text-gray-600 mb-4">Our students showcased exceptional projects at this year's science fair...</p>
                <Link to="/news" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Read More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1508163223045-1880bc36e222?ixlib=rb-4.0.3"
                alt="Sports Tournament"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-blue-600 text-sm mb-2">March 10, 2024</p>
                <h3 className="text-xl font-bold mb-2">Regional Sports Championship Victory</h3>
                <p className="text-gray-600 mb-4">Our school team brings home the trophy from the regional championships...</p>
                <Link to="/news" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Read More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3"
                alt="Art Exhibition"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-blue-600 text-sm mb-2">March 5, 2024</p>
                <h3 className="text-xl font-bold mb-2">Student Art Exhibition Opening</h3>
                <p className="text-gray-600 mb-4">Celebrating creativity at our annual student art exhibition...</p>
                <Link to="/news" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Read More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Rolex Academy?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards a bright future. Contact us today to learn more
              about our admissions process.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
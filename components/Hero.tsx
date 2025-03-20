import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';
import { projects } from './Projects'


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const mediumProfileUrl = 'https://medium.com/@ifaiq';
  const about = {
    name: "Faiq Shariff",
    title: "Software Engineer",
    bio: "Hey! I’m a Software Engineer with 7 years of experience building scalable, high-performance backend systems. I work with Node.js (Nest.js, Express.js), Python (FastAPI, Django), and cloud tech to create solutions that align with business goals and deliver killer user experiences. I’ve led teams in designing robust platforms, diving into system design, microservices, and AI integrations—basically, I turn complex problems into elegant solutions.",
    personal: "But here’s the twist: when I’m not coding, I’m at the gym. Fitness is my other passion, and I love helping others crush their fitness goals through strength training and functional workouts. It’s like coding for the body—identify the problem, create a plan, and iterate until you see results. For me, both tech and fitness boil down to discipline, goals, and a willingness to push through challenges. Whether it’s debugging a tricky piece of code or hitting a new personal best, I’m all about growth and consistency. Let’s connect! Whether you’re into tech, fitness, or just balancing it all, I’d love to hear your story. Cheers!",
  };

  const contact = {
    email: "faiq55@yahoo.com",
    social: [
      { name: "📱: +92-3222339643" },
      { name: "LinkedIn", url: "https://linkedin.com/in/ifaiq" },
      { name: "GitHub", url: "https://github.com/ifaiq" }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col" >
      {/* Header */}
      < header className="py-6 border-b border-gray-200" >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-medium tracking-wider">FAS</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <button
                  onClick={() => setActiveSection('about')}
                  className={`text-sm tracking-wide ${activeSection === 'about' ? 'font-bold' : ''}`}
                >
                  ABOUT
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('projects')}
                  className={`text-sm tracking-wide ${activeSection === 'projects' ? 'font-bold' : ''}`}
                >
                  PROJECTS
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open(mediumProfileUrl, '_blank')}
                  className={`text-sm tracking-wide ${activeSection === 'blogs' ? 'font-bold' : ''}`}
                >
                  BLOGS
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header >

      {/* Main Content */}
      < main className="flex-grow container mx-auto px-6 py-12" >
        {activeSection === 'about' && (
          <section className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-light mb-8">{about.name}</h2>
            <p className="text-xl mb-6">{about.title}</p>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">{about.bio}</p>
              <p className="text-lg leading-relaxed">{about?.personal}</p>
            </div>
          </section>
        )}

        {
          activeSection === 'projects' && (
            <section>
              <h2 className="text-2xl font-light mb-8">Work History</h2>
              <div className="grid grid-cols-1 gap-16">
                {projects.map(project => (
                  <div key={project.id} className="border-b border-gray-200 pb-16 last:border-0">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full object-cover bg-gray-100 rounded-lg border border-gray-300 shadow-md"
                        />
                      </div>
                      <div className="md:w-1/2">
                        <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
                        <p className="mb-4 text-gray-700 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs py-1 px-2 bg-gray-100 text-gray-800">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {project.details && (
                          <div className="mt-6">
                            <h4 className="text-sm font-medium mb-3 uppercase tracking-wider">Key Contributions</h4>
                            <ul className="text-sm space-y-3 list-disc pl-5">
                              {project.details.map((detail, index) => (
                                <li key={index}>
                                  <strong>{detail.title}:</strong> {detail.description}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}


                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        }

        {
          activeSection === 'contact' && (
            <section className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-light mb-8">Get in Touch</h2>
              <a
                href={`mailto:${contact.email}`}
                className="text-xl underline hover:no-underline inline-block mb-8"
              >
                {contact.email}
              </a>
              <div className="flex justify-center space-x-8">
                {contact.social.map(platform => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:font-bold"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </section>
          )
        }

        {activeSection === 'blogs' && (
          <section className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-light mb-8">Blogs</h2>
            <p className="text-lg mb-6">
              Check out my blogs on Medium:
            </p>
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl underline hover:no-underline inline-block mb-8"
            >
              Visit My Medium Profile
            </a>
          </section>
        )}
      </main >

      {/* Footer */}
      < footer className="py-8 border-t border-gray-200 bg-gray-50" >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} Faiq Shariff. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-gray-600 hover:text-black transition"
              >
                {contact.email}
              </a>

              {contact.social.map(platform => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-black transition"
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
};

export default Portfolio;
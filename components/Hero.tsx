import React, { useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  // Portfolio data
  const about = {
    name: "Faiq Shariff",
    title: "Software Engineer",
    bio: "As a Lead Software Engineer with 7 years of industry expertise, I specialize in designing and developing scalable, high-performance backend systems using Node.js (Nest.js, Express.js, Salesforce Commerce Cloud), Python (fastAPI, Django), and modern cloud technologies. I focus on creating intelligent solutions that align with business objectives and deliver exceptional user experiences. With a strong foundation in system design, microservices architecture, and AI integrations, I have successfully led teams in building robust platforms that foster innovation.",
    personal: "Beyond my software engineering work, I am also passionate about fitness and personal training. In my free time, I enjoy helping others achieve their fitness goals by incorporating strength training and functional workouts into their routines. My commitment to both tech and fitness reflects a disciplined and goal-oriented mindset that drives success in all areas of life."
  };
  const projects = [
    {
      id: 1,
      title: "Lead Software Engineer",
      description: "",
      tags: ["FastAPI", "Node.js", "Next.js", "AWS", "AI/ML"],
      image: "/srp.png",
      details: [
        {
          title: "🚀 Leading AI-Powered SaaS Innovation",
          description: "Spearheading the design and development of an AI-powered SaaS platform, tailored to solve industry-specific challenges through advanced machine learning and AI capabilities."
        },
        {
          title: "💡 Technology & Architecture",
          description: "Utilizing FastAPI, Node.js, Next.js, PostgreSQL, ChromaDB, TypeORM, LangChain, OpenAI API, and cloud technologies (AWS) to build a scalable, multi-tenant architecture that ensures security, performance, and easy integration."
        },
        {
          title: "📈 Driving Product & AI Strategy",
          description: "Collaborating with product managers, AI engineers, and other engineers to align on goals, ensuring efficient and agile delivery of product features."
        },
        {
          title: "🏗 Scalability & Performance Optimization",
          description: "Architecting a highly modular and scalable backend system, allowing clients to deploy the SaaS platform on both cloud infrastructure and on-premise servers."
        },
        {
          title: "🪴Innovation and Optimization",
          description: "Constantly innovating to integrate cutting-edge AI functionalities, optimize performance, and enhance the user experience for diverse enterprise clients."
        },
        {
          title: "👥 Leadership & Team Growth",
          description: "Leading and mentoring a team of developers, fostering a culture of continuous learning and innovation while maintaining best practices in software development and DevOps."
        }
      ]
    },
    {
      id: 2,
      title: "Lead Software Engineer",
      description: "",
      tags: ["FastAPI", "Node.js", "Next.js", "AWS", "AI/ML"],
      image: "/teamx.png",
      details: [
        {
          title: "🚀 Spearheading Scalable Backend Development",
          description: "Led the backend development of a flagship web & mobile application, serving millions of users across iOS, Android, and web platforms."
        },
        {
          title: "🏗 Architecting Scalability",
          description: "Designed a robust and scalable backend architecture, ensuring seamless performance and responsiveness across all platforms."
        },
        {
          title: "🔗 API Development & Optimization",
          description: "Developed and optimized RESTful APIs for key functionalities, including user registration, subscriptions, e-commerce transactions, and real-time quiz interactions."
        },
        {
          title: "🔒 Data Security & Management",
          description: "Implemented advanced authentication methods and security protocols to enhance data integrity and safeguard user information."
        },
        {
          title: "💡 Innovative Features & Integrations",
          description: "Developed a comprehensive subscription model, integrated a secure payment gateway, and introduced an automated quiz and raffle system to drive engagement."
        },
        {
          title: "📊 Analytics & Performance Insights",
          description: "Utilized Google Analytics and custom analytics tools to gain actionable insights, driving strategic decisions and improving user retention."
        }
      ]
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      description: "",
      tags: ["FastAPI", "Node.js", "Next.js", "AWS", "AI/ML"],
      image: "/retalo.png",
      details: [
        {
          title: "📦 Warehouse Management System Development",
          description: "Contributed to building a robust Warehouse Management System (WMS) that significantly improved inventory tracking, increasing physical stock accuracy."
        },
        {
          title: "🚚 Optimizing Logistics & Delivery",
          description: "Revamped existing logistics workflows, reducing delivery and loading times. This led to an additional order delivery per batch, increasing sales by 10% per route."
        },
        {
          title: "⚙️ Continuous Integration & Deployment",
          description: "Implemented a CI/CD pipeline ensuring 100% successful build and test cases before merges, enhancing the stability and reliability of the WMS."
        },
        {
          title: "📈 Expanding Product Availability & Revenue",
          description: "Developed a feature enabling 5,000 SKUs to be available on the app, contributing to a 20% incremental GMV growth in the company’s product portfolio."
        }
      ]
    },
    {
      id: 4,
      title: "Software Engineer - E-Commerce Platforms",
      description: "",
      tags: ["Salesforce Commerce Cloud", "Express.js", "Node.js", "CI/CD", "Jenkins", "Docker"],
      image: "/cg.png",
      url: "https://your-ecommerce-project.com", // Add project-specific URL
      details: [
        {
          title: "🛒 E-Commerce Development for Global Brands",
          description: "Led the backend development of e-commerce applications for top-tier US-based clients including Canada Goose, Vineyard Vines, and CPO Outlets, ensuring seamless online shopping experiences."
        },
        {
          title: "💻 Advanced Tech Stack for Scalable Solutions",
          description: "Utilized JavaScript/Node.js, Express.js, SCSS, ISML, and HTML5 to create high-performance, responsive e-commerce platforms that elevated user engagement and conversion rates."
        },
        {
          title: "🚀 CI/CD Pipeline Optimization",
          description: "Streamlined deployment workflows using Jenkins and Docker, reducing CI/CD pipeline execution time by 10 minutes, significantly enhancing development efficiency."
        },
        {
          title: "✨ Adhering to Best Practices & Design Patterns",
          description: "Maintained a high standard of code quality by following modern design patterns, ensuring maintainability, scalability, and performance optimization."
        }
      ]
    },
    {
      id: 4,
      title: "Javascript Developer",
      description: "",
      tags: ["Web Crawling", "ETL", "Node.js", "Python", "Data Processing", "JavaScript"],
      image: "/gfk.png",
      url: "https://your-web-crawling-project.com", // Replace with actual project URL
      details: [
        {
          title: "🕷️ Scalable Web Crawlers for Data Aggregation",
          description: "Designed and developed distributed web crawlers using JavaScript, Node.js, and CSS selectors, enabling seamless data extraction and efficient search result delivery."
        },
        {
          title: "⚡ Optimized ETL Pipelines for Performance",
          description: "Created a high-performance ETL (Extract, Transform, Load) process, reducing data loading time by 25%, accelerating feature deployment and improving operational efficiency."
        },
        {
          title: "📊 Data Cleaning & Validation for Accuracy",
          description: "Compiled, validated, and processed large datasets using Python and Excel, improving data integrity and driving better business insights."
        },
        {
          title: "🤝 Cross-Team Collaboration for Scalable Solutions",
          description: "Worked closely with frontend and backend teams to ensure that web crawlers met business needs, optimized performance, and provided stakeholders with high-quality data."
        },
        {
          title: "🔍 Enhancing Search & Data Discoverability",
          description: "Implemented intelligent indexing and filtering techniques to enhance search relevance, delivering faster and more accurate search results to end users."
        },
        {
          title: "🚀 Continuous Improvement & Scalability",
          description: "Regularly optimized crawler performance by refining scraping strategies, handling dynamic content, and ensuring compliance with web standards."
        }
      ]
    },
    {
      id: 5,
      title: "Embedded Systems & IoT Engineer",
      description: "",
      tags: ["Embedded Systems", "IoT", "Microcontrollers", "C/C++", "Node.js", "Mobile Apps"],
      image: "/lt.png",
      url: "https://your-embedded-project.com", // Replace with actual project URL
      details: [
        {
          title: "🔧 Embedded Software Development",
          description: "Designed and developed embedded system software, ensuring reliable deployment to target devices while performing rigorous testing to validate expected functionality."
        },
        {
          title: "📡 IoT Device Design & Development",
          description: "Engineered an IoT device equipped with a microcontroller, sensors, and wireless radio communication, enabling real-time data collection and seamless integration with cloud services."
        },
        {
          title: "⚙️ Automated Data Collection System",
          description: "Developed a system to automate data collection from embedded devices, encompassing a mobile app interface, backend web services, and a structured data store."
        },
        {
          title: "📲 Mobile App & Web Services Integration",
          description: "Built a mobile app that interacts with embedded systems, facilitating data visualization and device control while integrating with cloud-based web services."
        },
        {
          title: "🔍 Real-Time Monitoring & Analytics",
          description: "Implemented real-time monitoring and analytics, allowing stakeholders to gain valuable insights into device performance and sensor data trends."
        },
        {
          title: "🚀 Performance Optimization & Scalability",
          description: "Optimized firmware and software architecture for minimal power consumption and efficient communication between IoT devices and backend services."
        }
      ]
    }
  ];

  const contact = {
    email: "faiq55@yahoo.com",
    social: [
      { name: "📱: +92-3222339643" },
      { name: "LinkedIn", url: "https://linkedin.com/in/ifaiq" },
      { name: "GitHub", url: "https://github.com/ifaiq" }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="py-6 border-b border-gray-200">
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
                {/* <button
                  onClick={() => setActiveSection('contact')}
                  className={`text-sm tracking-wide ${activeSection === 'contact' ? 'font-bold' : ''}`}
                >
                  CONTACT
                </button> */}
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        {activeSection === 'about' && (
          <section className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-light mb-8">{about.name}</h2>
            <p className="text-xl mb-6">{about.title}</p>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">{about.bio}</p>
              <p className="text-lg leading-relaxed">{about.personal}</p>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section>
            <h2 className="text-2xl font-light mb-8">Selected Work</h2>
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
        )}

        {activeSection === 'contact' && (
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
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-gray-50">
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
      </footer>
    </div>
  );
};

export default Portfolio;
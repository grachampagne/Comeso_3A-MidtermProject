import { useState, useEffect } from 'react';
import './index.css';

const Home = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => observer.observe(element));
    return () => fadeElements.forEach(element => observer.unobserve(element));
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-[#ECCFC3] to-[#ECB8A5] py-16 relative overflow-hidden">
      <div className="absolute -left-4 top-1/4 z-10 animate-bounce">
        <div className="relative">
        <div className="w-32 h-40 bg-gradient-to-br from-[#904C77] to-[#E49AB0] rounded-t-full rounded-b-lg shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <div className="absolute top-8 left-6 w-20 h-16 bg-[#ECCFC3] rounded-full">
            <div className="absolute top-5 left-4 w-3 h-3 bg-gray-800 rounded-full animate-pulse"></div>
            <div className="absolute top-5 right-4 w-3 h-3 bg-gray-800 rounded-full animate-pulse"></div>
            <div className="absolute top-8 left-3 w-2 h-1.5 bg-pink-300 rounded-full opacity-60"></div>
            <div className="absolute top-8 right-3 w-2 h-1.5 bg-pink-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-gray-800 rounded-full"></div>
            </div>
          <div className="absolute -top-2 left-4 w-6 h-8 bg-[#904C77] rounded-t-full"></div>
          <div className="absolute -top-2 right-4 w-6 h-8 bg-[#904C77] rounded-t-full"></div>
          </div>
        <div className="absolute bottom-4 -right-2 w-4 h-6 bg-[#ECCFC3] rounded-full transform rotate-12"></div>
        <div className="absolute bottom-4 -right-6 w-4 h-6 bg-[#ECCFC3] rounded-full transform -rotate-12"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hello, I'm <span className="text-[#904C77]">Grace</span>
          </h1>
          <h2 className="text-2xl text-gray-600 mb-6">Integrative Programming and Technologies 2</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg fade-in">
            A third-year BSIT student passionate about technology, 
            programming, and innovative system development.
          </p>
          <div className="space-y-4">
            <div className="flex items-center fade-in">
              <svg className="w-6 h-6 text-[#904C77] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-gray-700">Location: Mamburao, Occidental Mindoro</span>
            </div>
            <div className="flex items-center fade-in">
              <svg className="w-6 h-6 text-[#904C77] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span className="text-gray-700">gracecomeso0838@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#E49AB0] to-[#904C77] rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img src="/src/assets/profile.jpeg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#ECB8A5] text-gray-800 px-4 py-2 rounded-full font-bold shadow-lg">
              Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => observer.observe(element));
    return () => fadeElements.forEach(element => observer.unobserve(element));
  }, []);

  return (
    <section id="about" className="py-16 bg-white relative">
      <div className="absolute -right-4 top-20 z-10 hidden md:block">
        <div className="relative animate-bounce">
          <div className="w-28 h-32 bg-gradient-to-br from-[#E49AB0] to-[#904C77] rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <div className="absolute top-4 left-3 w-20 h-24 bg-[#ECCFC3] rounded"></div>
            <div className="absolute top-4 right-3 w-20 h-24 bg-[#ECB8A5] rounded"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-24 bg-[#904C77] rounded"></div>
            <div className="absolute top-6 left-5 w-8 h-1 bg-gray-400 rounded"></div>
            <div className="absolute top-8 left-5 w-10 h-1 bg-gray-400 rounded"></div>
            <div className="absolute top-10 left-5 w-9 h-1 bg-gray-400 rounded"></div>
            <div className="absolute top-6 right-5 w-8 h-1 bg-gray-400 rounded"></div>
            <div className="absolute top-8 right-5 w-10 h-1 bg-gray-400 rounded"></div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            </div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-2 border-b-2 border-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              I'm Mary Grace Villabane Comeso, the youngest of my family-a passionate student 
              with a strong interest in technology, programming, and innovative system development.
              With experience in creating modern web applications, I've been able to apply my knowledge 
              in real-world projects. 
              My journey in my college started years ago, and I've been
              continuously learning and growing since then.
            </p>
            
            <div className="bg-[#ECCFC3] p-6 rounded-lg border-l-4 border-[#904C77] fade-in">
              <h4 className="font-bold text-gray-800 mb-2">My Biggest Accomplishment</h4>
              <p className="text-gray-700">
                My greatest accomplishment is reaching this stage of my college journey. 
                This achievement means so much to me because it was never easy.
                Behind every class, every requirement, and every step forward were 
                countless hardships, sacrifices, and moments of doubt. There were
                times when giving up felt easier than continuing, but I held on 
                through faith, perseverance, and hope. Only God truly knows the struggles I faced, 
                the silent battles I fought, and the strength it took to keep going. 
                Standing where I am today is not just a result of effort, but a testament 
                to resilience, faith, and the grace that carried me through.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">My Interests & Goals</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg fade-in">
                <h4 className="font-medium text-gray-800 mb-2">Area of Interest</h4>
                <p className="text-gray-600">
                  I'm particularly interested in frontend development and UI/UX design. 
                  I am still learning in creating responsive, accessible websites with modern frameworks.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg fade-in">
                <h4 className="font-medium text-gray-800 mb-2">Future Goals</h4>
                <p className="text-gray-600">
                  I aim to deepen my knowledge in backend technologies. 
                  My goal is to become capable of building scalable applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const [skillBarsAnimated, setSkillBarsAnimated] = useState(false);

  useEffect(() => {
    const skillBarObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !skillBarsAnimated) {
          setSkillBarsAnimated(true);
          skillBarObserver.disconnect();
        }
      });
    }, { threshold: 0.5 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) skillBarObserver.observe(skillsSection);
    return () => skillBarObserver.disconnect();
  }, [skillBarsAnimated]);

  const skills = [
    { name: 'JavaScript', percent: 50, color: 'bg-[#904C77]' },
    { name: 'HTML/CSS', percent: 65, color: 'bg-[#E49AB0]' },
    { name: 'PHP', percent: 50, color: 'bg-[#ECB8A5]' },
    { name: 'Java', percent: 55, color: 'bg-[#957D95]' },
    { name: 'TypeScript', percent: 30, color: 'bg-[#ECB8A5]' }
  ];

  const tools = [
    { name: 'React', description: 'Component-based library' },
    { name: 'OAuth 2.0', description: 'Authentication & Security' },
    { name: 'Node.js', description: 'Server-side JavaScript' },
    { name: 'Git', description: 'Version control system' },
    { name: 'MySQL', description: 'Relational Database Management System' },
    { name: 'Cloud Firestore', description: 'NoSQL database' }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 relative">
      <div className="absolute -left-4 top-1/3 z-10 hidden md:block">
        <div className="relative animate-bounce">
          <div className="w-32 h-28 bg-gradient-to-br from-[#904C77] to-[#E49AB0] rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="absolute top-2 left-2 right-2 bottom-8 bg-[#1a1a2e] rounded">
              <div className="space-y-1 p-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
                <div className="w-16 h-1 bg-green-400 rounded"></div>
                <div className="w-12 h-1 bg-blue-400 rounded"></div>
                <div className="w-14 h-1 bg-purple-400 rounded"></div>
                <div className="w-10 h-1 bg-pink-400 rounded"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#ECCFC3] rounded-b-lg"></div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-[#904C77] inline-block">
              Programming Languages
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`${skill.color} h-2.5 rounded-full skill-bar`}
                      style={{ 
                        width: skillBarsAnimated ? `${skill.percent}%` : '0%',
                        '--skill-percent': `${skill.percent}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-[#904C77] inline-block">
              Tools & Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 fade-in">
                  <h4 className="font-bold text-[#904C77] mb-1">{tool.name}</h4>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'MedAi',
      description: 'A responsive AI-Driven healthcare web application built with HTML, CSS, and JavaScript. Features include tracking body aches, user history management, and an AI insight system.',
      role: 'Programmer',
      image: '/src/assets/medai.png',
      tags: [
        { name: 'HTML', color: 'bg-[#ECCFC3] text-[#904C77]' },
        { name: 'OpenAI API', color: 'bg-[#E49AB0] text-[#904C77]' }
      ]
    },
    {
      title: 'SomaSphere',
      description: 'A mobile application that allows individuals with mental health concerns to connect with professional counselors through secure messaging and access therapy support. Built with React Native and Firebase for real-time updates.',
      role: 'Programmer',
      image: '/src/assets/landing page.png',
      tags: [
        { name: 'React Native', color: 'bg-[#957D95] text-[#904C77]' },
        { name: 'Firebase', color: 'bg-red-100 text-red-800' },
        { name: 'Typescript', color: 'bg-indigo-100 text-indigo-800' }
      ]
    },
    {
      title: 'MamByahe',
      description: 'A responsive ride-sharing mobile application that allows users to find and book rides using a third-party API. Features include location search and ride booking.',
      role: 'Programmer',
      image: 'https://via.placeholder.com/400x200/ECB8A5/904C77?text=MamByahe+App',
      tags: [
        { name: 'JavaScript', color: 'bg-[#E49AB0] text-[#904C77]' },
        { name: 'API Integration', color: 'bg-gray-100 text-gray-800' },
        { name: 'CSS', color: 'bg-pink-100 text-pink-800' },
        { name: 'PHP', color: 'bg-pink-100 text-pink-800' }
      ]
    },
    {
      title: 'Transportation Sharing App',
      description: 'A responsive design for ride-sharing mobile application that allows users to find and book rides using a Visual Basic. Features include location search and ride booking.',
      role: 'Programmer',
      image: 'https://via.placeholder.com/400x200/957D95/E49AB0?text=Transportation+App',
      tags: [
        { name: 'Visual basic', color: 'bg-[#E49AB0] text-[#904C77]' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white relative">
      <div className="absolute -right-4 top-1/4 z-10 hidden md:block">
        <div className="relative animate-bounce">
          <div className="w-32 h-40 bg-gradient-to-br from-[#E49AB0] to-[#904C77] rounded-full shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-28 bg-white rounded-t-full rounded-b-lg">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#ECCFC3] rounded-full border-4 border-gray-300"></div>
              <div className="absolute bottom-0 -left-4 w-6 h-12 bg-[#904C77] rounded-tl-full"></div>
              <div className="absolute bottom-0 -right-4 w-6 h-12 bg-[#904C77] rounded-tr-full"></div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#904C77]"></div>
        
              <div className="absolute top-14 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
              </div>
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-gray-800 rounded-full"></div>
              <div className="absolute top-16 left-6 w-2 h-1 bg-pink-300 rounded-full opacity-60"></div>
              <div className="absolute top-16 right-6 w-2 h-1 bg-pink-300 rounded-full opacity-60"></div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="w-4 h-8 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-6 bg-yellow-500 rounded-full animate-pulse"></div>
              <div className="w-4 h-8 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 project-card fade-in"
            >
              <img 
                src={project.image} 
                alt={`${project.title} Screenshot`} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-[#904C77] font-medium mb-2">Role: {project.role}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`${tag.color} text-xs px-2 py-1 rounded`}>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reflection = () => {
  const reflections = [
    {
      question: 'What technologies did you use and why?',
      answer: 'For this portfolio, I used HTML, CSS with Tailwind CSS, and JavaScript. HTML provides the semantic structure, Tailwind CSS offers utility-first styling that speeds up development, and JavaScript adds interactivity. I chose these technologies because they form the foundation of modern web development and are essential skills for any web developer.'
    },
    {
      question: 'Which parts of the portfolio were easiest for you?',
      answer: 'The layout and styling sections were the easiest for me since I experienced with CSS and responsive design. Creating the navigation and sections came naturally.'
    },
    {
      question: 'Which parts were most challenging?',
      answer: 'The most challenging part was balancing aesthetics with functionality while maintaining responsiveness across all devices. Ensuring smooth scrolling navigation and creating an engaging user experience required careful attention to detail.'
    },
    {
      question: 'What technologies are you most interested in learning?',
      answer: 'I am most interested in learning technologies that enhance digital learning experiences, such as Learning Management Systems (LMS) like AI-driven educational platforms that provide personalized learning, and interactive web/mobile development frameworks that can create engaging, student-centered applications.'
    },
    {
      question: 'What kind of applications do you want to build in the future?',
      answer: 'In the future, I want to build applications that help break barriers and reduce discrimination for persons with disabilities (PWD), by providing accessible, inclusive, and empowering digital solutions. I\'m particularly interested in creating productivity tools, educational platforms, and applications that promote sustainability.'
    }
  ];

  return (
    <section id="reflection" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Reflection</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="space-y-8">
            {reflections.map((item, index) => (
              <div key={index} className="fade-in">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 100)) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-[#904C77] text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">My Portfolio</div>
          <ul className="flex space-x-6">
            {['home', 'about', 'skills', 'projects', 'reflection'].map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`}
                  onClick={(e) => scrollToSection(e, section)}
                  className={`hover:text-blue-200 transition capitalize ${activeSection === section ? 'text-yellow-300' : ''}`}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Home />
      <About />
      <Skills />
      <Projects />
      <Reflection />

      <footer className="bg-[#904C77] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; 2026 My Portfolio. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/grachampagne" target="_blank" rel="noopener noreferrer" className="hover:text-[#E49AB0] transition">GitHub</a>
            <a href="mailto:gracecomeso0838@gmail.com" className="hover:text-[#E49AB0] transition">Email</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        {showMessage && !isChatOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 mb-4 w-72 border-2 border-[#904C77]">
            <div className="relative">
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45 border-l-2 border-b-2 border-[#904C77]"></div>
              <p className="text-gray-800 font-medium mb-1">Hi there! 👋</p>
              <p className="text-sm text-gray-600">Want to discuss a project? Feel free to contact me!</p>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#904C77] hover:bg-[#E49AB0] text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
          </svg>
        </button>

        {isChatOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl w-80 overflow-hidden border-2 border-[#904C77]">
            <div className="bg-[#904C77] text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold">Contact Me</h3>
                <p className="text-xs text-[#ECCFC3]">Let's chat!</p>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-[#ECCFC3] transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#ECCFC3] rounded-lg rounded-tl-none p-3 max-w-xs">
                    <p className="text-sm text-gray-800">Hello! I'm Grace, a passionate developer 💻</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-end">
                  <div className="bg-[#904C77] text-white rounded-lg rounded-tr-none p-3 max-w-xs ml-auto">
                    <p className="text-sm">I specialize in frontend development and UI/UX design!</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#ECCFC3] rounded-lg rounded-tl-none p-3 max-w-xs">
                    <p className="text-sm text-gray-800">Have a project in mind? Let's work together! 🚀</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#E49AB0] rounded-lg rounded-tl-none p-3 max-w-xs">
                    <p className="text-sm text-gray-800 font-semibold">Quick Contact Options:</p>
                    <ul className="text-xs text-gray-700 mt-2 space-y-1">
                      <li>📧 gracecomeso0838@gmail.com</li>
                      <li>📍 Mamburao, Occidental Mindoro</li>
                      <li>💼 Available for opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-white border-t border-gray-200">
              <a
                href="mailto:gracecomeso0838@gmail.com"
                className="block w-full bg-[#904C77] hover:bg-[#E49AB0] text-white text-center py-2 rounded-lg transition-colors duration-300 font-medium"
              >
                Send Email to gracecomeso0838@gmail.com
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

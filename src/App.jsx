import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Rocket, ChevronDown, Send, Phone, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const typewriterPhrases = [
    "MERN Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Creative Thinker"
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = typewriterPhrases[typewriterIndex];
    
    if (typewriterText.length < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(currentPhrase.slice(0, typewriterText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypewriterText('');
        setTypewriterIndex((prev) => (prev + 1) % typewriterPhrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typewriterText, typewriterIndex]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "ANATRA Podcast",
      description: "Plateforme de gestion de podcast avec système d'administration et diffusion",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "bg-gradient-to-br from-blue-500 to-cyan-500",
      year: "2025",
      link: "#"
    },
    {
      title: "Gestion de Bibliothèque",
      description: "Application complète de gestion de bibliothèque avec CRUD et authentification",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "bg-gradient-to-br from-sky-500 to-blue-500",
      year: "2024",
      link: "#"
    },
    {
      title: "Stage Fynatec",
      description: "Développement web et projets variés durant 3 mois de stage professionnel",
      tech: ["PHP", "JavaScript", "MySQL"],
      image: "bg-gradient-to-br from-indigo-500 to-blue-600",
      year: "2023",
      link: "#"
    },
    {
      title: "Projects & Designs",
      description: "Création de designs modernes et interfaces utilisateur avec Canva",
      tech: ["Canva", "UI/UX", "Design"],
      image: "bg-gradient-to-br from-cyan-500 to-teal-500",
      year: "2024",
      link: "#"
    }
  ];

  const skills = [
    { name: "MERN Stack", level: 50, icon: "⚛️", desc: "MongoDB, Express, React, Node.js" },
    { name: "PHP & MySQL", level: 70, icon: "🐘", desc: "Développement backend" },
    { name: "JavaScript", level: 60, icon: "⚡", desc: "ES6+ & Frameworks modernes" },
    { name: "Design UI/UX", level: 70, icon: "🎨", desc: "Canva & Prototyping" },
    { name: "VS Code & Git", level: 80, icon: "💻", desc: "Outils de développement" },
    { name: "Pack Office", level: 50, icon: "📊", desc: "Suite bureautique complète" }
  ];

  const education = [
    { year: "2024-2025", title: "Master 1 Informatique", school: "ISM Advancea Ambatonakanga" },
    { year: "2023-2024", title: "Licence Informatique", school: "ISM Advancea Ambatonakanga" },
    { year: "2022-2023", title: "DTS Informatique", school: "ISM Advancea Ambatonakanga" },
    { year: "2020-2021", title: "Baccalauréat Série D", school: "Lycée Saint Etienne Ambanidia" }
  ];

  const interests = [
    { icon: "🏀", name: "Basketball", detail: "N1B du Club L2BV" },
    { icon: "♟️", name: "Échecs", detail: "900 Elo & Professeur pour enfants" },
    { icon: "🎵", name: "Musique", detail: "Étudiant à l'EGM" },
    { icon: "🎤", name: "Chant", detail: "Membre de Chorale" },
    { icon: "🧩", name: "Rubik's Cube", detail: "Résolution & speedcubing" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Je vous répondrai bientôt 🚀');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
        <div 
          className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            top: mousePosition.y - 192,
            left: mousePosition.x - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              CAT - DEV
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['HOME', 'ABOUT', 'PROJECTS', 'SKILLS', 'CONTACT'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10">
            <div className="flex flex-col p-6 space-y-4">
              {['HOME', 'ABOUT', 'PROJECTS', 'SKILLS', 'CONTACT'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-8xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-sky-500 bg-clip-text text-transparent animate-pulse">Miantsa</span>
            </h1>
            <div className="text-3xl md:text-5xl font-bold text-blue-400 mb-6 h-20 flex items-center justify-center">
              <span>{typewriterText}</span>
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </div>
            <p className="text-xl text-gray-300 mb-4">
              Étudiant Master 1 Informatique
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Building the future, one line of code at a time.
            </p>
          </div>

          <button 
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            VIEW MY PROJECTS
            <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>

          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="mailto:miantsasu@gmail.com"
              className="p-3 border border-white/20 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/261344069187"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 rounded-lg hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 hover:scale-110"
              title="WhatsApp"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 border border-white/20 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 border border-white/20 rounded-lg hover:border-gray-400 hover:bg-gray-500/10 transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto z-10">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              À Propos
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Profile Info */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Profil</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Localisation</p>
                    <p>Lot II v 44 bis Besarety, Antananarivo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p>+261 38 20 127 11</p>
                    <p>+261 34 40 691 87 (WhatsApp)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>miantsasu@gmail.com</p>
                    <p>miantsasu1@gmail.com</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p><span className="text-blue-400">Âge:</span> 22 ans</p>
                  <p><span className="text-blue-400">Nationalité:</span> Malagasy</p>
                  <p><span className="text-blue-400">Situation:</span> Célibataire</p>
                </div>
              </div>
            </div>

            {/* Education & Qualities */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Éducation</h3>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div key={i} className="border-l-2 border-blue-500 pl-4">
                      <p className="text-blue-400 font-semibold">{edu.year}</p>
                      <p className="font-bold">{edu.title}</p>
                      <p className="text-sm text-gray-400">{edu.school}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Qualités</h3>
                <div className="flex flex-wrap gap-3">
                  {['Sérieux', 'Dynamique', 'Créatif'].map((quality, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full border border-blue-500/50"
                    >
                      {quality}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Langues</h3>
                <div className="space-y-2 text-gray-300">
                  <p>🇲🇬 Malagasy: Maternelle</p>
                  <p>🇫🇷 Français: Moyen</p>
                  <p>🇬🇧 Anglais: B1</p>
                  <p>🇩🇪 Allemand: A1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Centres d'Intérêt
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {interests.map((interest, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-3">{interest.icon}</div>
                  <p className="font-bold mb-1">{interest.name}</p>
                  <p className="text-xs text-gray-400">{interest.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto z-10">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Projets & Expérience
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className={`h-64 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-lg rounded-full text-sm font-bold">
                    {project.year}
                  </div>
                  <div className="absolute top-4 left-4 p-2 bg-white/10 backdrop-blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto z-10">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <div>
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <p className="text-xs text-gray-400">{skill.desc}</p>
                    </div>
                  </div>
                  <span className="text-blue-400 font-bold text-xl">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                    style={{ width: `${isVisible.skills ? skill.level : 0}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Outils & Technologies
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['VS Code', 'Canva', 'Pack Office', 'Git', 'MongoDB', 'Express', 'React', 'Node.js', 'PHP', 'MySQL'].map((tool, i) => (
                <span
                  key={i}
                  className="px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:border-blue-500/50 hover:scale-110 transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto z-10">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Contactez-moi
            </span>
          </h2>

          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Envoyer</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-400">
            <p className="mb-2">Ou contactez-moi directement :</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 text-sm">
              <a href="mailto:miantsasu@gmail.com" className="hover:text-blue-400 transition-colors">
                📧 miantsasu@gmail.com
              </a>
              <a href="https://wa.me/261344069187" className="hover:text-green-400 transition-colors">
                📱 +261 34 40 691 87
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Miantsasoa Malala Andrianina
          </p>
          <p className="text-sm text-gray-500">
            Crafted with 💙 and ☕ | Dev & Design
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
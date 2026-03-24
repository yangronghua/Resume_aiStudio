import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, skills } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              <Terminal size={16} />
              <span>Available for hire in Australia</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Software Developer <br />
              <span className="text-blue-600">& IT Graduate.</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-lg leading-relaxed">
              I'm Ronghua Yang, a Master of IT graduate from UTAS. I specialize in building scalable backend systems and robust web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2"
              >
                View Projects <ArrowRight size={20} />
              </Link>
              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com/yangronghua616" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:yangronghua616@gmail.com" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square bg-blue-600/5 rounded-3xl border border-blue-600/10 flex items-center justify-center p-12">
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl shadow-blue-500/10 border border-neutral-100 p-8 overflow-hidden">
                <pre className="text-sm font-mono text-blue-600 leading-relaxed">
                  <code>{`const developer = {
  name: "Ronghua Yang",
  role: "Software Developer",
  education: "Master of IT (UTAS)",
  skills: ["Node.js", "React", "SQL"],
  status: "Seeking Opportunities",
  location: "Australia"
};

function buildFuture() {
  return developer.skills.map(skill => 
    solveProblems(skill)
  );
}`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-neutral-600">A comprehensive toolkit for modern software development.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-neutral-200"
              >
                <h3 className="font-bold text-blue-600 mb-4 uppercase text-xs tracking-widest">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map(item => (
                    <li key={item} className="text-neutral-700 text-sm font-medium flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-neutral-600">Some of my recent work in backend and full-stack development.</p>
          </div>
          <Link to="/projects" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

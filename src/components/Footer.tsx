import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="font-bold text-xl tracking-tight">RY.dev</Link>
            <p className="text-neutral-500 text-sm">© 2026 Ronghua Yang. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/yangronghua616" className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:yangronghua616@gmail.com" className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="flex items-center gap-8 text-sm font-medium text-neutral-500">
            <Link to="/projects" className="hover:text-blue-600">Projects</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

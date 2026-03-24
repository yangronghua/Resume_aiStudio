import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Coffee, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
            <div className="prose prose-neutral max-w-none text-neutral-600 space-y-6 text-lg leading-relaxed">
              <p>
                I am a Software Developer and IT Graduate based in Australia. I recently completed my 
                <strong> Master of Information Technology</strong> at the University of Tasmania, 
                where I developed a strong foundation in computer science and software engineering.
              </p>
              <p>
                My technical journey is driven by a passion for solving complex problems through code. 
                I have a particular interest in backend development, distributed systems, and search optimization.
              </p>
              <p>
                Beyond my technical studies, I have a unique background as a cafe business owner. 
                This experience was instrumental in developing my soft skills—problem-solving under pressure, 
                time management, and understanding business requirements from a practical perspective.
              </p>
              <p>
                I am now fully committed to my career in the IT industry, seeking roles where I can 
                contribute my technical expertise and business-minded approach to build impactful software.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-blue-600" /> Education
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-neutral-900">Master of Information Technology</h3>
                  <p className="text-sm text-blue-600 font-medium">University of Tasmania, Australia</p>
                  <p className="text-sm text-neutral-500 mt-1">Focus on Software Engineering & Data Systems</p>
                </div>
                <div className="pt-4 border-t border-neutral-200">
                  <h3 className="font-bold text-neutral-900">Undergraduate & Postgraduate Studies</h3>
                  <p className="text-sm text-blue-600 font-medium">China</p>
                  <p className="text-sm text-neutral-500 mt-1">Solid academic results in technical disciplines</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Coffee className="text-blue-600" /> Entrepreneurship
              </h2>
              <div>
                <h3 className="font-bold text-neutral-900">Cafe Business Owner</h3>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  Managed daily operations, staff, and inventory. Developed critical business 
                  logic and problem-solving skills that I now apply to software architecture.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

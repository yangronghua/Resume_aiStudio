import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-600"
            >
              I'm currently seeking new opportunities in Australia. Let's connect!
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-neutral-600">yangronghua616@gmail.com</p>
                  <a href="mailto:yangronghua616@gmail.com" className="text-blue-600 text-sm font-bold hover:underline mt-1 inline-block">
                    Send an email
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">LinkedIn</h3>
                  <p className="text-neutral-600">Professional Network</p>
                  <a href="#" className="text-blue-600 text-sm font-bold hover:underline mt-1 inline-block">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Location</h3>
                  <p className="text-neutral-600">Australia</p>
                  <p className="text-sm text-neutral-400 mt-1">Open to relocation</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Message</label>
                <textarea
                  placeholder="How can I help you?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}

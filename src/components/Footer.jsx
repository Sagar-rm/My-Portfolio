"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import TypingAnimation from "./TypingAnimation"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-cyan-500/20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-cyan-400 font-orbitron">SR</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-gray-400">Portfolio</span>
          </div>

          <p className="text-gray-400 mb-4">© {currentYear} Sagar Rathod. Crafted with ❤️ and lots of ☕</p>

          <div className="text-cyan-400 font-mono text-sm mb-6">
            <TypingAnimation
              texts={[
                "> Made with Vite, React, and Framer Motion",
                "> Powered by creativity and caffeine",
                "> Building the future, one line at a time",
                "> Always learning, always growing",
              ]}
            />
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sagar@example.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-hover"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="inline-block"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
          >
            <span className="text-2xl">🚀</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-600/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  )
}

export default Footer

"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"
import { Github, Linkedin, Download } from "lucide-react"

const Navigation = () => {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "achievements", "contact"]
    const observers = sections.map((section) => {
      const element = document.getElementById(section)
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section)
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(element)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-cyan-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div className="text-2xl font-bold text-cyan-400 cursor-hover" whileHover={{ scale: 1.05 }}>
          <span className="font-orbitron">SR</span>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`cursor-hover transition-colors duration-300 ${
                activeSection === item.href.slice(1) ? "text-cyan-400" : "text-white hover:text-cyan-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="flex space-x-4">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <Github className="w-6 h-6 text-white hover:text-cyan-400" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <Linkedin className="w-6 h-6 text-white hover:text-cyan-400" />
          </motion.a>
          <motion.button className="cursor-hover" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Download className="w-6 h-6 text-white hover:text-cyan-400" />
          </motion.button>
        </div>
      </div>

      <motion.div
        className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        style={{ scaleX: scrollYProgress }}
        transformOrigin="0%"
      />
    </motion.nav>
  )
}

export default Navigation

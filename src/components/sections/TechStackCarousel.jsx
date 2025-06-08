"use client"

import { motion } from "framer-motion"
import { Code, Globe, Palette, Server, Database, Smartphone, Zap, Layers, GitBranch } from "lucide-react"

const TechStackCarousel = () => {
  const technologies = [
    { name: "React", icon: Code, color: "from-blue-400 to-blue-600" },
    { name: "Next.js", icon: Globe, color: "from-gray-400 to-gray-600" },
    { name: "TypeScript", icon: Code, color: "from-blue-500 to-blue-700" },
    { name: "Tailwind", icon: Palette, color: "from-cyan-400 to-cyan-600" },
    { name: "Node.js", icon: Server, color: "from-green-400 to-green-600" },
    { name: "MongoDB", icon: Database, color: "from-green-500 to-green-700" },
    { name: "React Native", icon: Smartphone, color: "from-purple-400 to-purple-600" },
    { name: "GSAP", icon: Zap, color: "from-yellow-400 to-yellow-600" },
    { name: "Three.js", icon: Layers, color: "from-orange-400 to-orange-600" },
    { name: "Git", icon: GitBranch, color: "from-red-400 to-red-600" },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white font-orbitron"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tech Arsenal
        </motion.h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-cyan-500/20 cursor-hover"
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center mb-3`}
                >
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-white font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TechStackCarousel

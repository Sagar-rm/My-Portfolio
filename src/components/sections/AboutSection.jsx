"use client"

import { motion } from "framer-motion"
import {
  Monitor,
  Server,
  Palette,
  Smartphone,
  Settings,
  Database,
  Brain,
  Layers,
  Zap,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react"
import { Badge } from "@/components/ui/Badge"

const AboutSection = () => {
  const skills = [
    { name: "Frontend Development", level: 95, icon: Monitor },
    { name: "Backend Development", level: 88, icon: Server },
    { name: "UI/UX Design", level: 85, icon: Palette },
    { name: "Mobile Development", level: 80, icon: Smartphone },
    { name: "DevOps & Cloud", level: 75, icon: Settings },
    { name: "Database Design", level: 90, icon: Database },
  ]

  const interests = [
    { name: "AI & Machine Learning", icon: Brain },
    { name: "Blockchain Technology", icon: Layers },
    { name: "IoT Development", icon: Zap },
    { name: "Game Development", icon: Target },
    { name: "Open Source", icon: Heart },
    { name: "Tech Innovation", icon: Lightbulb },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-white font-orbitron"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-purple-500 opacity-50"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400 font-orbitron">Hello World! 👋</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating innovative digital experiences. With
                expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community. I believe in continuous learning and pushing the
                boundaries of what's possible on the web.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">🎯 Problem Solver</Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">🚀 Innovation Driven</Badge>
              <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30">💡 Creative Thinker</Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🌱 Continuous Learner</Badge>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white font-orbitron">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-6 h-6 text-cyan-400" />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-white font-orbitron">Interests & Passions</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center cursor-hover"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <interest.icon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <span className="text-white font-medium">{interest.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

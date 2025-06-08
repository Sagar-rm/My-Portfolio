"use client"

import { motion } from "framer-motion"
import { Trophy, GraduationCap, Heart, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Top Developer Award",
      organization: "TechCorp Solutions",
      year: "2023",
      description: "Recognized for outstanding performance and innovation in software development",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Full Stack Certification",
      organization: "Meta",
      year: "2022",
      description: "Completed comprehensive full-stack development program",
      icon: GraduationCap,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      year: "2021-Present",
      description: "Active contributor to various open-source projects with 500+ contributions",
      icon: Heart,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Hackathon Winner",
      organization: "DevFest 2023",
      year: "2023",
      description: "First place in AI/ML category for innovative healthcare solution",
      icon: Award,
      color: "from-purple-400 to-purple-600",
    },
  ]

  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Professional",
    "MongoDB Certified Developer",
    "React Advanced Certification",
    "Node.js Expert Level",
    "Kubernetes Administrator",
  ]

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-white font-orbitron"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Recognition
        </motion.h2>

        {/* Awards Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-cyan-500/20 cursor-hover hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-cyan-400 font-medium mb-1">{achievement.organization}</p>
                      <p className="text-purple-400 text-sm mb-3">{achievement.year}</p>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-white font-orbitron">Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20 text-center cursor-hover"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsSection

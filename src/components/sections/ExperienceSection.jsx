"use client"

import { motion } from "framer-motion"
import { MapPin, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "Remote",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines",
      ],
      tech: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "2021 - 2022",
      location: "New York, NY",
      description:
        "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
      achievements: [
        "Built 15+ responsive websites",
        "Improved user engagement by 60%",
        "Optimized loading times by 50%",
      ],
      tech: ["React", "Vue.js", "Sass", "JavaScript", "Figma"],
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub",
      period: "2020 - 2021",
      location: "San Francisco, CA",
      description:
        "Started my journey in web development, working on various projects and learning modern development practices.",
      achievements: ["Completed 20+ projects", "Learned 5+ new technologies", "Contributed to open source"],
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-white font-orbitron"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <Card className="bg-white/5 backdrop-blur-sm border-cyan-500/20 cursor-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-purple-400 font-medium">{exp.period}</p>
                        <p className="text-gray-400 text-sm flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full border-4 border-black z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

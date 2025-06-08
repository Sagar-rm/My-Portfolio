"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Eye, Heart, MessageCircle, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All")
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.",
      longDescription:
        "A comprehensive e-commerce platform built with modern technologies, featuring user authentication, product management, shopping cart, payment integration with Stripe, order tracking, and an admin panel for inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      category: "Full Stack",
      image: "/placeholder.svg?height=300&width=400",
      demo: "#",
      github: "#",
      stats: { views: "2.5K", likes: "180", comments: "45" },
      featured: true,
    },
    {
      title: "AI-Powered Task Manager",
      description:
        "Intelligent task management app with AI suggestions, collaboration features, and advanced analytics.",
      longDescription:
        "A smart task management application that uses AI to suggest task priorities, deadlines, and optimal scheduling. Features real-time collaboration, progress tracking, and detailed analytics dashboard.",
      tech: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma", "Tailwind"],
      category: "AI/ML",
      image: "/placeholder.svg?height=300&width=400",
      demo: "#",
      github: "#",
      stats: { views: "1.8K", likes: "120", comments: "32" },
      featured: true,
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat app with video calls, file sharing, and end-to-end encryption.",
      longDescription:
        "A secure real-time messaging platform with features like group chats, video/voice calls, file sharing, message encryption, and custom emoji reactions.",
      tech: ["React", "Socket.io", "WebRTC", "Express", "Redis"],
      category: "Full Stack",
      image: "/placeholder.svg?height=300&width=400",
      demo: "#",
      github: "#",
      stats: { views: "3.2K", likes: "250", comments: "67" },
      featured: false,
    },
    {
      title: "Cryptocurrency Dashboard",
      description: "Real-time crypto tracking dashboard with portfolio management and trading signals.",
      longDescription:
        "A comprehensive cryptocurrency dashboard that tracks real-time prices, manages portfolios, provides trading signals, and offers detailed market analysis with interactive charts.",
      tech: ["Vue.js", "Chart.js", "CoinGecko API", "Vuex", "Sass"],
      category: "Frontend",
      image: "/placeholder.svg?height=300&width=400",
      demo: "#",
      github: "#",
      stats: { views: "1.5K", likes: "95", comments: "28" },
      featured: false,
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with location-based forecasts and interactive maps.",
      longDescription:
        "An elegant weather application featuring accurate forecasts, interactive weather maps, severe weather alerts, and personalized weather insights based on user preferences.",
      tech: ["React Native", "OpenWeather API", "Maps API", "Redux"],
      category: "Mobile",
      image: "/placeholder.svg?height=300&width=400",
      demo: "#",
      github: "#",
      stats: { views: "2.1K", likes: "160", comments: "41" },
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio with modern animations and interactive elements.",
      longDescription:
        "A stunning portfolio website showcasing projects and skills with smooth animations, interactive elements, and optimized performance across all devices.",
      tech: ["Next.js", "Framer Motion", "Tailwind", "Three.js"],
      category: "UI/UX",
      image: "/placeholder.svg?height=300&width=400",
      demo: "#",
      github: "#",
      stats: { views: "4.2K", likes: "320", comments: "89" },
      featured: true,
    },
  ]

  const categories = ["All", "Full Stack", "Frontend", "Mobile", "AI/ML", "UI/UX"]
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-8 text-white font-orbitron"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A showcase of my latest work, featuring innovative solutions and cutting-edge technologies. Each project
          represents a unique challenge and creative solution.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={`cursor-hover transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-cyan-500/20 overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 cursor-hover h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 cursor-hover">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black cursor-hover"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Project Stats */}
                    <div className="absolute top-4 right-4 flex space-x-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {project.stats.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {project.stats.likes}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">{project.category}</Badge>
                    </div>

                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {hoveredProject === index ? project.longDescription : project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {project.stats.comments}
                        </div>
                        <div className="flex items-center cursor-hover">
                          <Share2 className="w-4 h-4 mr-1" />
                          Share
                        </div>
                      </div>
                      <div className="text-cyan-400 font-medium">View Details →</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="cursor-hover bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection

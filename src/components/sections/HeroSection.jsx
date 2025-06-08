"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Rocket, Mail } from "lucide-react"
import { Button } from "@/components/ui/Button"
import TypingAnimation from "@/components/TypingAnimation"

const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      <motion.div style={{ y }} className="container mx-auto px-6 text-center z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full p-1 mb-8">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-4xl">🚀</div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-orbitron"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Hi, I'm Sagar
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <TypingAnimation
              texts={["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast", "Code Artist"]}
              className="text-cyan-400"
            />
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Crafting digital experiences with passion, precision, and a touch of magic. Transforming ideas into reality
            through innovative web solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="cursor-hover bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Rocket className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-hover border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {[
              { number: "50+", label: "Projects" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-cyan-500/20"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-cyan-400 font-orbitron mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-hover"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-32 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full blur-xl"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-xl"
        animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
    </section>
  )
}

export default HeroSection

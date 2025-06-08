"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Calendar, Github, Linkedin, Coffee } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sagar@example.com",
      href: "mailto:sagar@example.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: "#",
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Open to opportunities",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-8 text-white font-orbitron"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind? Let's discuss how we can bring your ideas to life. I'm always excited to work on new
          challenges and innovative solutions.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/5 backdrop-blur-md border-cyan-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2 font-medium">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/10 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 cursor-hover"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 font-medium">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/10 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 cursor-hover"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">Subject *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white/10 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 cursor-hover"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/10 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 min-h-[120px] cursor-hover"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-full transition-all duration-300 cursor-hover"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, creative projects, or potential collaborations. Feel
                free to reach out if you have any questions or just want to say hello!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center space-x-4 cursor-hover"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-cyan-400 font-medium">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:bg-gray-600" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-600" },
                  { icon: Mail, href: "mailto:sagar@example.com", label: "Email", color: "hover:bg-red-600" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-hover ${social.color}`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <motion.div
              className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl p-6 border border-cyan-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Coffee className="w-6 h-6 text-cyan-400" />
                <h4 className="text-white font-medium">Fun Fact</h4>
              </div>
              <p className="text-gray-300 text-sm">
                I've consumed over 1,000 cups of coffee while coding and I'm always up for a good tech discussion over
                coffee! ☕
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

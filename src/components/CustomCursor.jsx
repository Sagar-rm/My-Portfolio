"use client"

import { useEffect, useRef, useState } from "react"

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener("mousemove", moveCursor)

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("button, a, .cursor-hover")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out ${
        isHovering ? "w-12 h-12 bg-cyan-400/30 border-2 border-cyan-400" : "w-6 h-6 bg-cyan-400"
      } rounded-full mix-blend-difference`}
      style={{ transform: "translate(-50%, -50%)" }}
    />
  )
}

export default CustomCursor

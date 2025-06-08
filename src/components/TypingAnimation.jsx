import { useTypingAnimation } from "@/hooks/useTypingAnimation"

const TypingAnimation = ({ texts, className = "", speed = 100, deleteSpeed = 50, pauseTime = 1000 }) => {
  const currentText = useTypingAnimation(texts, speed, deleteSpeed, pauseTime)

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingAnimation

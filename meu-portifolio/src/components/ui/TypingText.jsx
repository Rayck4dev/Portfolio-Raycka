import React, { useState, useEffect } from "react";

export default function TypingText( { texts } ) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = texts[index % texts.length];

      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        setSpeed(50);
      } else {
        setDisplayText((prev) => currentFullText.substring(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, speed]);

  return (
    <span className="relative inline-block text-neonPurple drop-shadow-[0_0_15px_#a020f0]">
      {displayText}
      <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-[3px] h-[80%] bg-neonPurple animate-pulse" />
    </span>
  );
}

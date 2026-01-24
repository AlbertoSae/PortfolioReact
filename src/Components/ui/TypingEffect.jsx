import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes (e.g., language switch)
    setDisplayedText('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Re-write every 10 seconds after finishing
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div className="typing-effect">
      <span>{displayedText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingEffect;

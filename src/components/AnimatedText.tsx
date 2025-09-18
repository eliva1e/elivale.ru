import { useRef, useState } from 'react';

function AnimatedText({ text }: { text: string }) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const randomizeLetters = () => {
      setDisplayText(
        displayText
          .split('')
          .map(() => {
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join('')
      );
    };

    randomizeLetters();

    const interval = setInterval(randomizeLetters, 50);
    intervalRef.current = interval;
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setDisplayText(text);
    }
  };
  
  return (
    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {displayText}
    </span>
  );
}

export default AnimatedText;

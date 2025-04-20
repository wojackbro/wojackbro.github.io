'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const updateCursorStyle = () => {
      const target = document.elementFromPoint(position.x, position.y) as HTMLElement;
      if (target) {
        const computedStyle = window.getComputedStyle(target);
        setIsPointer(
          computedStyle.cursor === 'pointer' || 
          target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.getAttribute('role') === 'button'
        );
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousemove', updateCursorStyle);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Force initial visibility
    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', updateCursorStyle);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position.x, position.y]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 z-[9999] pointer-events-none"
        style={{
          x: position.x - 2,
          y: position.y - 2,
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: 'tween', 
          duration: 0.1, 
          ease: 'circOut'
        }}
      />
      
      {/* Rainbow trail */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none"
          style={{
            x: position.x,
            y: position.y,
            width: isPointer ? 30 : 20,
            height: isPointer ? 30 : 20,
            borderRadius: '50%',
            backgroundColor: 'transparent',
            border: `2px solid hsla(${(i * 60) % 360}, 100%, 70%, ${0.6 - i * 0.1})`,
            transform: `translate(-50%, -50%) scale(${1 + i * 0.2})`,
            opacity: isVisible ? (0.8 - i * 0.1) : 0,
            zIndex: 9999 - i,
          }}
          transition={{
            type: 'spring',
            stiffness: 500 - i * 70,
            damping: 30,
            mass: 0.5,
          }}
        />
      ))}
      
      {/* Glow effect for pointer */}
      {isPointer && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none"
          style={{
            x: position.x,
            y: position.y,
            width: 60,
            height: 60,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transform: 'translate(-50%, -50%)',
            opacity: isVisible ? 0.7 : 0,
            zIndex: 9995,
            filter: 'blur(6px)',
          }}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 20,
          }}
        />
      )}
    </>
  );
} 
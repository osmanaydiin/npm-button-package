import React, { useState, useCallback, useRef } from 'react'
import styles from './styles.module.css'

export const BismillahBtn = ({ text, isDark = false, width = '200px', height = '50px', onClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const buttonRef = useRef(null);
  const rippleTimeoutRef = useRef(null);

  const handleMouseMove = useCallback((event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  }, []);

  const handleClick = useCallback((event) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    button.style.setProperty('--ripple-x', `${x}%`);
    button.style.setProperty('--ripple-y', `${y}%`);

    button.classList.add(styles.rippling);

    if (rippleTimeoutRef.current) {
      clearTimeout(rippleTimeoutRef.current);
    }

    rippleTimeoutRef.current = setTimeout(() => {
      if (button) {
        button.classList.remove(styles.rippling);
      }
    }, 1000);

    if (onClick) {
      onClick(event);
    }
  }, [onClick]);

  return (
    <div className={styles.buttonContainer}>
      <button
        ref={buttonRef}
        className={`${styles.bismillahButton} ${isDark ? styles.dark : styles.light}`}
        style={{
          width,
          height,
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        }}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseMove}
      >
        <span className={styles.buttonText}>{text}</span>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </button>
    </div>
  )
}

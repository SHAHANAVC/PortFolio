import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    // Only initialize on devices with hover capability
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      if (dotRef.current) dotRef.current.style.display = 'none';
      if (circleRef.current) circleRef.current.style.display = 'none';
      return;
    }

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Instant update for the heavy dot to eliminate lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }
    };

    const animate = () => {
      // Eased positioning for the circle with a tight factor (0.3) for less delay
      circle.current.x += (mouse.current.x - circle.current.x) * 0.3;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.3;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circle.current.x}px, ${circle.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    requestRef.current = requestAnimationFrame(animate);

    // Event delegation for styling hovers (avoids multiple react state updates)
    const handleMouseOver = (e) => {
      if (!circleRef.current) return;
      const target = e.target;
      const isClickable = target.closest('a, button, .clickable, .card, input, textarea');
        
      if (isClickable) {
        circleRef.current.classList.add('custom-cursor-hover');
      } else {
        circleRef.current.classList.remove('custom-cursor-hover');
      }
    };

    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div ref={circleRef} className="custom-cursor-circle" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
};

import { useState, useEffect } from 'react';

const useCountUp = (end, duration = 2000, active = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let startTime = null;
    let animationFrame = null;

    const endValue = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) : end;
    if (isNaN(endValue)) {
      setCount(end);
      return;
    }

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentValue = Math.floor(progress * endValue);
      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, active]);

  return count;
};

export default useCountUp;

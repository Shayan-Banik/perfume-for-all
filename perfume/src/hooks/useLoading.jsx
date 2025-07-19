import { useState, useEffect } from 'react';

export function useLoading(duration = 3000) {
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const increment = 100 / (duration / 50); 
    
    const interval = setInterval(() => {
      setPercentage(prev => {
        const newPercentage = prev + increment;
        if (newPercentage >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 1000);
          return 100;
        }
        return newPercentage;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration]);

  return { isLoading, percentage };
}

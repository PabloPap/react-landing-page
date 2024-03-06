import { useEffect, useState } from 'react';

export type WindowsSize = {
  width: number;
  height: number;
};

export const useWindowSize = () => {
  const [windowSize, setWindowsSize] = useState<WindowsSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowsSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

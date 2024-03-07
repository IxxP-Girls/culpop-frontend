import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const useScrollY = () => {
  const [yPos, setYPos] = useState(0);
  useEffect(() => {
    const scrollHandler = throttle(() => {
      setYPos(window.pageYOffset);
    }, 200);

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return yPos;
};

export default useScrollY;

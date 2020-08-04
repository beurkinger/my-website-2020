import { useEffect, useState } from 'preact/hooks';

const useDelay = (duration: number): boolean => {
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsDone(true);
    }, duration);
  }, [duration]);
  return isDone;
};

export default useDelay;

import { useEffect, useState } from 'preact/hooks';

const DEFAULT_DURATION = 100;

const Delay = (duration = DEFAULT_DURATION): boolean => {
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsDone(true);
    }, duration);
  }, [duration]);
  return isDone;
};

export default Delay;

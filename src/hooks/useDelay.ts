import { useEffect, useRef, useState } from 'preact/hooks';

const useDelay = (duration: number): boolean => {
  const timeoutRef = useRef<number | null>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setIsDone(true);
    }, duration);

    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, [duration]);
  return isDone;
};

export default useDelay;

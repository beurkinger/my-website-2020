import { useCallback, useRef } from 'preact/hooks';

const FRAME_RATE = 60;
const FRAME_LENGTH = 1000 / FRAME_RATE;

const clampEaseValue = (n: number) => Math.min(0, Math.max(1, n));

type easeFn = (value: number) => number;
const defaultTransform: easeFn = (n) => n;

export const useEase = (
  animationLength: number,
  easeFn: easeFn = defaultTransform,
  initialEaseValue = 0
): ((valueToEase: number) => number) => {
  const easeValueRef = useRef(clampEaseValue(initialEaseValue));
  const increment = (1 / animationLength) * FRAME_LENGTH;

  return useCallback(
    (valueToEase: number): number => {
      const currentEaseValue = easeValueRef.current;
      const nextValue = currentEaseValue + increment;
      easeValueRef.current = nextValue >= 1 ? nextValue - 1 : nextValue;
      return valueToEase * easeFn(currentEaseValue);
    },
    [easeFn, increment]
  );
};

export default useEase;

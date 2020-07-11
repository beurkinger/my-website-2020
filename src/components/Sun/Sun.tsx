import { h, FunctionComponent } from 'preact';
import { useCallback, useEffect, useRef } from 'preact/hooks';

import { getTangents, Size } from './utils';

import styles from './Sun.css';

interface Props {
  backgroundColor: string;
  maxRaysLength: number;
  nbRays: number;
  strokeColor: string;
  sunRadius: number;
}

const Sun: FunctionComponent<Props> = ({
  backgroundColor,
  maxRaysLength,
  nbRays,
  strokeColor,
  sunRadius,
}: Props) => {
  const animationFrameRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasDimensionsRef = useRef<Size>({ height: 0, width: 0 });
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rotationRef = useRef(0);
  const easingValueRef = useRef(0);

  const draw = useCallback(() => {
    if (!ctxRef.current) return;

    const ctx = ctxRef.current;
    const { height, width } = canvasDimensionsRef.current;
    const rotation = rotationRef.current;
    const easingValue = easingValueRef.current;
    const sunCenter = { x: width / 2, y: height / 2 };

    ctx.lineWidth = 1.3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = strokeColor;

    ctx.clearRect(0, 0, width, height);
    const raysLength = Math.sin(easingValue) * maxRaysLength;

    if (raysLength >= 1) {
      const tangents = getTangents(
        sunCenter,
        sunRadius,
        raysLength,
        nbRays,
        rotation
      );
      // not using array mapping for performance reasons
      for (let i = 0; i < tangents.length; i++) {
        const { start, end } = tangents[i];
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      }
    }

    if (raysLength >= 2) {
      ctx.beginPath();
      ctx.arc(sunCenter.x, sunCenter.y, sunRadius + raysLength, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }, [maxRaysLength, nbRays, strokeColor, sunRadius]);

  const animate = useCallback(() => {
    const prevRotation = rotationRef.current;
    const prevEasingValue = easingValueRef.current;

    rotationRef.current =
      prevRotation + 0.005 >= Math.PI * 2
        ? prevRotation + 0.005 - Math.PI * 2
        : prevRotation + 0.005;
    easingValueRef.current =
      prevEasingValue + 0.002 >= Math.PI ? 0 : prevEasingValue + 0.002;

    draw();

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [draw]);

  const handleResize = () => {
    if (!ctxRef.current) return;
    const ctx = ctxRef.current;
    const { height, width } = ctx.canvas.getBoundingClientRect();
    const {
      height: prevHeight,
      width: prevWidth,
    } = canvasDimensionsRef.current;

    if (width !== prevWidth || height !== prevHeight) {
      const pixelRatio = window?.devicePixelRatio || 1;
      ctx.canvas.width = width * pixelRatio;
      ctx.canvas.height = height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.imageSmoothingEnabled = false;
      canvasDimensionsRef.current = { height, width };
    }
  };

  useEffect(() => {
    const ctx = canvasRef?.current.getContext('2d') ?? null;

    if (ctx) {
      const { height, width } = ctx.canvas.getBoundingClientRect();
      const pixelRatio = window?.devicePixelRatio || 1;
      ctx.canvas.width = width * pixelRatio;
      ctx.canvas.height = height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.imageSmoothingEnabled = false;
      ctxRef.current = ctx;
      canvasDimensionsRef.current = { height, width };
    }

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [animate]);

  useEffect(() => {
    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      className={styles.sun}
      ref={canvasRef}
      style={{ backgroundColor }}
    />
  );
};

export default Sun;

import { h, FunctionComponent } from 'preact';
import { useCallback, useEffect, useRef } from 'preact/hooks';

import useEase from '../../hooks/useEase';

import { getTangents, setupCanvas, Size } from './utils';

import styles from './Sun.css';

interface Props {
  backgroundColor: string;
  sizeOfRays: number;
  nbRays: number;
  strokeColor: string;
  sunRadius: number;
}

const Sun: FunctionComponent<Props> = ({
  backgroundColor,
  sizeOfRays,
  nbRays,
  strokeColor,
  sunRadius,
}: Props) => {
  const animationFrameRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const sizeRef = useRef<Size>({ height: 0, width: 0 });

  const getRaysLength = useEase(26000, (n) => Math.sin(n * Math.PI));
  const getRotation = useEase(21000);

  const draw = useCallback(() => {
    if (!ctxRef.current) return;

    const ctx = ctxRef.current;
    const { height, width } = sizeRef.current;
    const sunCenter = { x: width / 2, y: height / 2 };
    const maxRaysLength = sizeOfRays * Math.min(height, width);
    const raysLength = getRaysLength(maxRaysLength);
    const rotation = getRotation(Math.PI * 2);

    ctx.lineWidth = 1.3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = strokeColor;

    ctx.clearRect(0, 0, width, height);

    const tangents = getTangents(
      sunCenter,
      sunRadius,
      raysLength,
      nbRays,
      rotation
    );
    // not using array mapping to increase performances
    for (let i = 0; i < tangents.length; i++) {
      const { start, end } = tangents[i];
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(sunCenter.x, sunCenter.y, sunRadius + raysLength, 0, 2 * Math.PI);
    ctx.stroke();

    animationFrameRef.current = requestAnimationFrame(draw);
  }, [getRaysLength, getRotation, sizeOfRays, nbRays, strokeColor, sunRadius]);

  const handleResize = () => {
    if (ctxRef.current) {
      sizeRef.current = setupCanvas(ctxRef.current);
    }
  };

  useEffect(() => {
    ctxRef.current = canvasRef?.current.getContext('2d') ?? null;
    if (!ctxRef.current) return;

    sizeRef.current = setupCanvas(ctxRef.current);
    animationFrameRef.current = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [draw]);

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

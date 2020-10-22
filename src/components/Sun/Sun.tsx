import { h, FunctionComponent } from 'preact';
import { useCallback, useEffect, useRef } from 'preact/hooks';

import useEase from '../../hooks/useEase';

import { setupCanvas } from './utils/canvas';
import { getTangents, Size } from './utils/math';
import { drawSmiley } from './utils/smiley';

import styles from './Sun.css';

const SUN_RADIUS_RATIO = 0.1;
const RAYS_LENGHT_RATIO = 0.75;
const NB_RAYS_RATIO = 0.12;

interface Props {
  backgroundColor?: string;
  strokeColor: string;
}

const Sun: FunctionComponent<Props> = ({
  backgroundColor = 'transparent',
  strokeColor,
}: Props) => {
  const animationFrameRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const sizeRef = useRef<Size>({ height: 0, width: 0 });

  const getRaysLength = useEase(20000, (n) => Math.sin(n * Math.PI));
  const getSunRotation = useEase(20000);

  const draw = useCallback(() => {
    if (!ctxRef.current) return;

    const ctx = ctxRef.current;
    const { height, width } = sizeRef.current;
    const sunCenter = { x: width / 2, y: height / 2 };
    const sunRadius = SUN_RADIUS_RATIO * Math.min(height, width);
    const maxRaysLength = RAYS_LENGHT_RATIO * Math.min(height, width);
    const nbRays = Math.round(NB_RAYS_RATIO * (height + width));
    const raysLength = getRaysLength(maxRaysLength);
    const sunRotation = getSunRotation(Math.PI * 2);

    ctx.lineWidth = 1.4;
    ctx.lineCap = 'round';
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = strokeColor;

    ctx.clearRect(0, 0, width, height);

    drawSmiley(ctx, sunCenter, sunRadius);

    const tangents = getTangents(
      sunCenter,
      sunRadius,
      raysLength,
      nbRays,
      sunRotation
    );
    // not using array mapping to increase performances
    ctx.beginPath();
    for (let i = 0; i < tangents.length; i++) {
      const { start, end } = tangents[i];
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(sunCenter.x, sunCenter.y, sunRadius + raysLength, 0, 2 * Math.PI);
    ctx.stroke();

    animationFrameRef.current = requestAnimationFrame(draw);
  }, [getRaysLength, getSunRotation, strokeColor]);

  const handleResize = () => {
    sizeRef.current = canvasRef.current.getBoundingClientRect();
    ctxRef.current = setupCanvas(
      canvasRef.current,
      sizeRef.current,
      true,
      false,
      true
    );
  };

  useEffect(() => {
    sizeRef.current = canvasRef.current.getBoundingClientRect();
    ctxRef.current = setupCanvas(
      canvasRef.current,
      sizeRef.current,
      true,
      false,
      true
    );
    if (ctxRef.current) {
      animationFrameRef.current = requestAnimationFrame(draw);
    }

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

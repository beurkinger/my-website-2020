import { h, FunctionComponent } from 'preact';
import { useCallback, useEffect, useRef } from 'preact/hooks';

import useEase from '../../hooks/useEase';

import { getTangents, setupCanvas, Size } from './utils';

import styles from './Sun.css';

interface Props {
  backgroundColor: string;
  strokeColor: string;
}

const Sun: FunctionComponent<Props> = ({
  backgroundColor,
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
    const sunRadius = Math.round(0.1 * Math.min(height, width));
    const maxRaysLength = Math.round(0.75 * Math.min(height, width));
    const nbRays = Math.round(0.12 * (height + width));
    const raysLength = getRaysLength(maxRaysLength);
    const sunRotation = getSunRotation(Math.PI * 2);

    ctx.lineWidth = 1.3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = strokeColor;

    ctx.clearRect(0, 0, width, height);

    // Face
    ctx.beginPath();
    ctx.arc(sunCenter.x, sunCenter.y, sunRadius, 0, Math.PI * 2, true);
    ctx.globalAlpha = 0.2;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.stroke();
    // Eyes
    const eyeRadius = sunRadius * 0.1;
    ctx.beginPath();
    ctx.ellipse(
      sunCenter.x - eyeRadius * 3,
      sunCenter.y - eyeRadius * 2,
      eyeRadius,
      eyeRadius * 1.5,
      0,
      0,
      Math.PI * 2,
      true
    );
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(
      sunCenter.x + eyeRadius * 3,
      sunCenter.y - eyeRadius * 2,
      eyeRadius,
      eyeRadius * 1.5,
      0,
      0,
      Math.PI * 2,
      true
    );
    ctx.fill();
    // Mouth
    const mouthRadius = sunRadius * 0.7;
    ctx.beginPath();
    ctx.arc(
      sunCenter.x,
      sunCenter.y,
      mouthRadius,
      Math.PI * 0.05,
      Math.PI * 0.95,
      false
    );
    ctx.stroke();
    // Mouth corners
    const mouthCornerLength = sunRadius * 0.15;
    ctx.beginPath();
    ctx.moveTo(
      sunCenter.x + mouthCornerLength * 4.25,
      sunCenter.y + mouthCornerLength * 0.4
    );
    ctx.lineTo(
      sunCenter.x + mouthCornerLength * 5,
      sunCenter.y + mouthCornerLength
    );
    ctx.moveTo(
      sunCenter.x - mouthCornerLength * 4.25,
      sunCenter.y + mouthCornerLength * 0.4
    );
    ctx.lineTo(
      sunCenter.x - mouthCornerLength * 5,
      sunCenter.y + mouthCornerLength
    );
    ctx.stroke();

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

import { h, FunctionComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

import { getTangents } from './utils';

import './Sun.css';


interface Props {
  backgroundColor: string;
  height: number;
  maxRaysLength: number;
  nbRays: number;
  strokeColor: string;
  sunRadius: number;
  width: number;
}

const Sun: FunctionComponent<Props> = ({ backgroundColor, height, maxRaysLength, nbRays, strokeColor, sunRadius, width }) => {
  const animationFrameRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  // const [raysLength, setRaysLength] = useState<number>(0);
  const [easingValue, setEasingValue] = useState<number>(0);


  const draw = () => {
    if (!canvasRef.current || !ctx) return;

    const sunCenter = { x: width / 2, y: height / 2 };

    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.imageSmoothingEnabled = false;
    ctx.lineWidth = 1.4;
    ctx.lineCap = 'round';
    ctx.strokeStyle = strokeColor;

    ctx.clearRect(0, 0, width, height);
    const raysLength = Math.sin(easingValue) * maxRaysLength;
    
    const tangents = getTangents(sunCenter, sunRadius, raysLength, nbRays, rotation);
    tangents.forEach(({ start, end }) => {
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    })

    ctx.beginPath();
    ctx.arc(sunCenter.x, sunCenter.y, sunRadius + raysLength, 0, 2 * Math.PI);
    ctx.stroke();
  }

  const animate = () => {
    setRotation((prevRotation) => (
      prevRotation + 0.005 >= Math.PI * 2 
        ? prevRotation + 0.005 - Math.PI * 2 
        : prevRotation + 0.005
    ));
    setEasingValue(prevEasingValue => (
      prevEasingValue + 0.002 >= Math.PI
      ? 0 
      : prevEasingValue + 0.002
    ));
    // setRaysLength(prevRaysLength => (
    //   prevRaysLength + 0.005 >= maxRaysLength 
    //   ? 0 
    //   : prevRaysLength + 0.5
    // ));
    animationFrameRef.current = requestAnimationFrame(animate);
  }


  useEffect(() => {
    const ctx = canvasRef?.current?.getContext("2d") ?? null;
    setCtx(ctx);

    requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);
  
  draw();

  return (
    <canvas
      className="sun"
      ref={canvasRef}
      style={{ backgroundColor, height, width }}
    />  
  );
}

export default Sun;

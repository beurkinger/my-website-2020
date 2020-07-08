import { h, FunctionComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

import { getTangents, Point } from './utils';

import './Sun.css';


interface Props {
  nbRays: number;
  raysLength: number;
  sunCenter: Point;
  sunRadius: number;
  sunRotation: number;
}

const Sun: FunctionComponent<Props> = ({ nbRays, raysLength, sunCenter, sunRadius }) => {
  const animationFrameRef = useRef(0);
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [rotation, setRotation] = useState<number>(0);

  const height = window.innerHeight;
  const width = window.innerWidth;

  // const draw = (r: number) => {
  //   if (!canvasRef || !ctx) return;

  //   ctx.clearRect(0, 0, width, height);
  //   const tangents = getTangents(sunCenter, sunRadius, raysLength, nbRays, r);
  //   tangents.forEach(({ start, end }) => {
  //     ctx.beginPath();
  //     ctx.moveTo(start.x, start.y);
  //     ctx.lineTo(end.x, end.y);
  //     ctx.stroke();
  //   })
  // }

  const animate = () => {
    setRotation((prevRotation) => (
      prevRotation + 0.005 >= Math.PI * 2 
        ? prevRotation + 0.005 - Math.PI * 2 
        : prevRotation + 0.005
    ));
    animationFrameRef.current = requestAnimationFrame(animate);
  }


  useEffect(() => {
    // const ctx = canvasRef?.current?.getContext("2d") ?? null;
    // if (!canvasRef || !ctx) return;

    // ctx.canvas.width = width;
    // ctx.canvas.height = height;
    // ctx.imageSmoothingEnabled = false;
    // ctx.lineWidth = 1.5;
    // ctx.strokeStyle = "#FFFFFF";
    // setCtx(ctx);

    requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);
  // console.log(rotation);

  // let t3 = 0;
  // for (let i = 0; i < 2000; i++) {
  //   const t1 = performance.now();
  //   getTangents(sunCenter, sunRadius, raysLength, 500);
  //   const t2 = performance.now();
  //   t3 += t2 - t1;
  // }
  // console.log(t3 /2000);

  const tangents = getTangents(sunCenter, sunRadius, raysLength, nbRays, rotation);

  return (
    <svg 
      baseProfile="full"
      className="sun"
      height={height}
      style={{ backgroundColor: 'black', stroke: 'white', strokeWidth: '1' }}
      version="1.1"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >  
    <circle cx={sunCenter.x} cy={sunCenter.y} r={sunRadius + raysLength} />
    { tangents.map(({ start, end }) => (
      <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} />
    ))}
  </svg>
  );


  // draw(rotation);
  // return (
  //   <canvas
  //     className="sun"
  //     height={height}
  //     ref={canvasRef}
  //     style={{ backgroundColor: 'black' }}
  //     width={width}
  //   />  
  // );
}

export default Sun;

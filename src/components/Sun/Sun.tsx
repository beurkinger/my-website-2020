import { h, FunctionComponent } from 'preact';
import { useCallback, useEffect, useRef } from 'preact/hooks';

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

const Sun: FunctionComponent<Props> = ({ backgroundColor, height, maxRaysLength, nbRays, strokeColor, sunRadius, width }: Props) => {
  const animationFrameRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rotationRef = useRef(0);
  const easingValueRef = useRef(0);
  // const [raysLength, setRaysLength] = useState<number>(0);

  const draw = useCallback(() => {
    if (!canvasRef.current || !ctxRef.current) return;

    const ctx = ctxRef.current;
    const rotation = rotationRef.current;
    const easingValue = easingValueRef.current;

    const sunCenter = { x: width / 2, y: height / 2 };

    ctx.lineWidth = 1.3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = strokeColor;

    ctx.clearRect(0, 0, width, height);
    const raysLength = Math.sin(easingValue) * maxRaysLength;
    
    if (raysLength >= 1) {
      const tangents = getTangents(sunCenter, sunRadius, raysLength, nbRays, rotation);
      // not using array mapping for performance reasons
      for (let i = 0; i < tangents.length; i++) {
        const { start, end } = tangents[i];
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      }
    }

    ctx.beginPath();
    ctx.arc(sunCenter.x, sunCenter.y, sunRadius + raysLength, 0, 2 * Math.PI);
    ctx.stroke();
  }, [height, maxRaysLength, nbRays, strokeColor, sunRadius, width]);

  const animate = useCallback(() => {
    const prevRotation = rotationRef.current;
    const prevEasingValue = easingValueRef.current;

    rotationRef.current =  prevRotation + 0.005 >= Math.PI * 2 
      ? prevRotation + 0.005 - Math.PI * 2 
      : prevRotation + 0.005;
    easingValueRef.current = prevEasingValue + 0.002 >= Math.PI
      ? 0 
      : prevEasingValue + 0.002;
    // setRaysLength(prevRaysLength => (
    //   prevRaysLength + 0.005 >= maxRaysLength 
    //   ? 0 
    //   : prevRaysLength + 0.5
    // ));

    draw();

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [draw])


  useEffect(() => {
    const ctx = canvasRef?.current.getContext("2d") ?? null;
    if (ctx) {
      const pixelRatio = window?.devicePixelRatio || 1;
      ctx.canvas.width = width * pixelRatio;
      ctx.canvas.height = height * pixelRatio;
      ctx.scale(pixelRatio,pixelRatio);
      ctx.imageSmoothingEnabled = false;
    }

    ctxRef.current = ctx;
    
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [animate, height, width]);
  
  return (
    <canvas
      className="sun"
      ref={canvasRef}
      style={{ backgroundColor, height, width }}
    />  
  );
}

export default Sun;

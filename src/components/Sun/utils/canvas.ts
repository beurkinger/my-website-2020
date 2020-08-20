import { Size } from './math';

export const setupCanvas = (
  ctx: CanvasRenderingContext2D,
  imageSmoothingEnabled = false
): Size => {
  const pixelRatio = window?.devicePixelRatio || 1;
  const { height, width } = ctx.canvas.getBoundingClientRect();

  ctx.canvas.width = width * pixelRatio;
  ctx.canvas.height = height * pixelRatio;
  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingEnabled = imageSmoothingEnabled;

  return { height, width };
};

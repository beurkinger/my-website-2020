import { Vector } from './math';

export const drawSmiley = (
  ctx: CanvasRenderingContext2D,
  center: Vector,
  radius: number
): void => {
  // Face
  ctx.beginPath();
  ctx.arc(center.x, center.y, radius, 0, Math.PI * 2, true);
  ctx.globalAlpha = 0.1;
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.stroke();
  // Eyes
  const eyeRadius = radius * 0.1;
  ctx.beginPath();
  ctx.ellipse(
    center.x - eyeRadius * 3,
    center.y - eyeRadius * 2,
    eyeRadius,
    eyeRadius * 1.6,
    0,
    0,
    Math.PI * 2,
    true
  );
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(
    center.x + eyeRadius * 3,
    center.y - eyeRadius * 2,
    eyeRadius,
    eyeRadius * 1.6,
    0,
    0,
    Math.PI * 2,
    true
  );
  ctx.fill();
  // Mouth
  const mouthRadius = radius * 0.7;
  ctx.beginPath();
  ctx.arc(
    center.x,
    center.y,
    mouthRadius,
    Math.PI * 0.05,
    Math.PI * 0.95,
    false
  );
  ctx.stroke();
  // Mouth corners
  const mouthCornerLength = radius * 0.15;
  ctx.beginPath();
  ctx.moveTo(
    center.x + mouthCornerLength * 4.25,
    center.y + mouthCornerLength * 0.4
  );
  ctx.lineTo(center.x + mouthCornerLength * 5, center.y + mouthCornerLength);
  ctx.moveTo(
    center.x - mouthCornerLength * 4.25,
    center.y + mouthCornerLength * 0.4
  );
  ctx.lineTo(center.x - mouthCornerLength * 5, center.y + mouthCornerLength);
  ctx.stroke();
};

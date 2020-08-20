export type Vector = { x: number; y: number };
export type Line = { start: Vector; end: Vector };
export type Size = { height: number; width: number };

export const rotateVector = (vector: Vector, angle: number): Vector => {
  const angleCos = Math.cos(angle);
  const angleSin = Math.sin(angle);
  return {
    x: vector.x * angleCos - vector.y * angleSin,
    y: vector.x * angleSin + vector.y * angleCos,
  };
};

export const getTangent = (
  center: Vector,
  radius: number,
  tangentLength: number,
  tangentAngle: number
): Line => {
  const radiusVector = rotateVector({ x: radius, y: 0 }, tangentAngle);
  const tangentVector = rotateVector({ x: 0, y: tangentLength }, tangentAngle);
  const start = { x: center.x + radiusVector.x, y: center.y + radiusVector.y };
  const end = { x: start.x + tangentVector.x, y: start.y + tangentVector.y };
  return { start, end };
};

export const getTangents = (
  center: Vector,
  radius: number,
  tangentLength: number,
  nbTangents: number,
  rotation: number
): Line[] => {
  if (nbTangents <= 0) return [];
  const angle = (Math.PI * 2) / nbTangents;
  // not using array mapping to increase performances
  const tangents = [];

  for (let i = 0; i < nbTangents; i++) {
    const tangent = getTangent(
      center,
      radius,
      tangentLength,
      angle * i + rotation
    );
    tangents.push(tangent);
  }
  return tangents;
};

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

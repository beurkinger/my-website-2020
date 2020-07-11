export type Point = { x: number, y: number };
export type Line = { start: Point, end: Point };

export const getPointOnCircle = (center: Point, radius: number, angle: number): Point => ({ 
    x: center.x + radius * Math.cos(angle),
    y: center.y + radius * Math.sin(angle)
  });
  
export const getTangent = (center: Point, radius: number, tangentLength: number, tangentAngle: number): Line => {
    const start = getPointOnCircle(center, radius, tangentAngle);
    const hypot = Math.hypot(radius, tangentLength);
    const angle = tangentAngle - Math.acos(radius / hypot);
    const end = getPointOnCircle(center, hypot, angle);
    return { start, end };
  }
  
export const getTangents = (center: Point, radius: number, tangentLength: number, nbTangents: number, rotation: number): Line[] => {  
    if (nbTangents <= 0) return [];
    const angle = (Math.PI * 2) / nbTangents;
    // not using array mapping for performances reasons
    const tangents = [];
    for (let i = 0; i < nbTangents; i++) {
      const tangent = getTangent(center, radius, tangentLength, angle * i + rotation);
      tangents.push(tangent);
    }
    return tangents;
  }

// export const ease = (maxValue: number, n: number) => {
//  const newN =

// }
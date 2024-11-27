export const distance = (x1: number, y1: number, x2: number, y2: number): number => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

export const slope = (x1: number, y1: number, x2: number, y2: number): number => {
  return (y2 - y1) / (x2 - x1);
};

export const sphereVolume = (radius: number): number => {
  return (4/3) * Math.PI * Math.pow(radius, 3);
};

export const sphereSurfaceArea = (radius: number): number => {
  return 4 * Math.PI * Math.pow(radius, 2);
};

export const cylinderVolume = (radius: number, height: number): number => {
  return Math.PI * Math.pow(radius, 2) * height;
};

export const cylinderSurfaceArea = (radius: number, height: number): number => {
  return 2 * Math.PI * radius * (radius + height);
};
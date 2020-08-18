export function xyObjectFactory(x, y) {
  return {
    x,
    y,
  };
}

export function validateXyObject(obj) {
  if (obj.x && obj.y) {
    return true;
  }
  return false;
}

export default { xyObjectFactory, validateXyObject };

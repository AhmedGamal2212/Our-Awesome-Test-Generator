const LL_MIN = Number.MIN_SAFE_INTEGER;
const LL_MAX = Number.MAX_SAFE_INTEGER;
/**
 * Generate a random number between min and max (inclusive).
 *
 * @param {number} min default is Number.MIN_SAFE_INTEGER
 * @param {number} max default is Number.MAX_SAFE_INTEGER
 * @param {boolean} isInteger default is false
 * @returns {number} a random number between min and max
 */
export default function randomNumber(
  min = LL_MIN,
  max = LL_MAX,
  isInteger = false
) {
  if (min > max) {
    throw new Error("min should be less than or equal to max");
  }
  const result = Math.random() * (max - min) + min;
  return isInteger ? Math.floor(result) : result;
}

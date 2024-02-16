import randomNumber from "./number.js";

/**
 * Generates an array of random numbers of the specified length using randomNumber.
 *
 * @param {number} length
 * @param {number} min default is Number.MIN_SAFE_INTEGER
 * @param {number} max default is Number.MAX_SAFE_INTEGER
 * @param {boolean} isInteger default is false
 * @returns {number[]} an array of random numbers of the specified length
 */
export default function randomArray(
  length,
  min = undefined,
  max = undefined,
  isInteger = false
) {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(randomNumber(min, max, isInteger));
  }
  return result;
}

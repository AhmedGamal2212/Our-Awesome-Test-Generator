import charGen from "./char";

/**
 * Generates a random string of a specified length using charGen.
 *
 * @param {number} length - The length of the random string.
 * @param {string} charFrom - Default is "a".
 * @param {string} charTo - Default is "z".
 * @returns {string} A random string of the specified length.
 */
export default function randomString(length, charFrom = "a", charTo = "z") {
  let result = "";

  for (let i = 0; i < length; i++) {
    result += charGen(charFrom, charTo);
  }

  return result;
}

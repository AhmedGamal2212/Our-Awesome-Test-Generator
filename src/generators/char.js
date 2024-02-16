/**
 * Generate a random character between charFrom and charTo (inclusive).
 *
 * @param {string} charFrom default is "a"
 * @param {string} charTo default is "z"
 * @returns {string} a random character between charFrom and charTo
 * @throws {Error} if charFrom or charTo is not a single character
 * @throws {Error} if charFrom is greater than charTo
 */
export default function randomChar(charFrom = "a", charTo = "z") {
  if (charFrom.length !== 1 || charTo.length !== 1) {
    throw new Error("charFrom and charTo should be a single character");
  }
  const from = charFrom.charCodeAt(0);
  const to = charTo.charCodeAt(0);
  if (from > to) {
    throw new Error("charFrom should be less than or equal to charTo");
  }
  const result = Math.floor(Math.random() * (to - from + 1)) + from;
  return String.fromCharCode(Math.floor(result));
}

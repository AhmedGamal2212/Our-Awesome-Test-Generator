import { describe, it, expect } from "vitest";
import randomNumber from "../generators/number";
import randomChar from "../generators/char";
import randomArray from "../generators/array";
import randomString from "../generators/string";

describe("Number Generator", () => {
  it("should generate a float number between 1 and 2", () => {
    const result = randomNumber(1, 2);
    expect(result).toBeGreaterThanOrEqual(1).toBeLessThanOrEqual(2);
  });
  it("should generate a float between -1e18 and 10", () => {
    const result = randomNumber(undefined, 10, true);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(-1e18).toBeLessThanOrEqual(10);
  });
  it("should throw an error if min is greater than max", () => {
    expect(() => randomNumber(2, 1)).toThrow();
  });
});

describe("Char Generator", () => {
  it("should generate a char between a and z", () => {
    const result = randomChar();
    expect(result).toMatch(/[a-z]/);
  });
  it("should generate a char between A and Z", () => {
    const result = randomChar("A", "Z");
    expect(result).toMatch(/[A-Z]/);
  });
  it("should generate a char between 0 and 9", () => {
    const result = randomChar("0", "9");
    expect(result).toMatch(/[0-9]/);
  });
  it("should throw an error if charFrom is greater than charTo", () => {
    expect(() => randomChar("z", "a")).toThrow();
  });
  it("should throw an error if charFrom or charTo is not a single character", () => {
    expect(() => randomChar("aa", "z")).toThrow();
    expect(() => randomChar("a", "zz")).toThrow();
  });
});

describe("Array Generator", () => {
  it("should generate an array of 10 random float", () => {
    const result = randomArray(10, 1, 2);
    expect(result).toHaveLength(10);
    result.forEach((number) => {
      expect(Number.isInteger(number)).toBe(false);
    });
  });
  it("should generate an array of 10 random integer", () => {
    const result = randomArray(10, undefined, undefined, true);
    expect(result).toHaveLength(10);
    result.forEach((number) => {
      expect(Number.isInteger(number)).toBe(true);
    });
  });
  it("should generate an array of 10 random float between 1 and 2", () => {
    const result = randomArray(10, 1, 2);
    expect(result).toHaveLength(10);
    result.forEach((number) => {
      expect(Number.isInteger(number)).toBe(false);
      expect(number).toBeGreaterThanOrEqual(1).toBeLessThanOrEqual(2);
    });
  });
});

describe("String Generator", () => {
  it("should generate a string of 8 chars between a and z", () => {
    const result = randomString(8);
    expect(typeof result).toBe("string");
    expect(result).toHaveLength(8);
    expect(result).toMatch(/[a-z]{8}/);
  });
  it("should generate a string of 8 chars between A and Z", () => {
    const result = randomString(8, "A", "Z");
    expect(typeof result).toBe("string");
    expect(result).toHaveLength(8);
    expect(result).toMatch(/[A-Z]{8}/);
  });
  it("should generate a string of 8 chars between 0 and 9", () => {
    const result = randomString(8, "0", "9");
    expect(typeof result).toBe("string");
    expect(result).toHaveLength(8);
    expect(result).toMatch(/[0-9]{8}/);
  });
});

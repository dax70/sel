/* @flow */

export function isNumeric(n: string| number): boolean {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export const startsWithQuotes = (str: string): boolean => {
  return str.startsWith('"') || str.startsWith("'");
}

export const matchBeginAndEnd = (str: string, charToMatch: string) => {
  return str.startsWith(charToMatch) && str.endsWith(charToMatch);
}

export const stripBeginAndEnd = (str: string) => str.substring(1, str.length -1);

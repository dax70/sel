

export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export const startsWithQuotes = (str) => {
  return str.startsWith('"') || str.startsWith("'");
}

export const matchBeginAndEnd = (str, charToMatch) => {
  return str.startsWith(charToMatch) && str.endsWith(charToMatch);
}

export const stripBeginAndEnd = (str) => str.substring(1, str.length -1);

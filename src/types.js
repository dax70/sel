/* @flow */

const TokenTypeValues = {
  number: 'number',
  literal: 'literal',
  identifier: 'identifier',
  keyword: 'keyword',
  symbol: 'symbol',
  op: 'op'
}

export type TokenType = $Keys<typeof TokenTypeValues>;
export type TokenError = { error: string };

export type Token = { type: TokenType, value: string };

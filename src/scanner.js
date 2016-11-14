/* @flow */

import { isNumeric, matchBeginAndEnd, startsWithQuotes, stripBeginAndEnd }
from './utils';
import Tokenizer from './tokenizer';
import type { Token, TokenType } from './types';

const ops = { equals:'eq', greaterThan:'gt', lessThan:'lt'}
const keywords = ['and', 'or', 'true', 'false', 'today', 'tomorrow', 'yesterday'];
const symbols = ['(', ')', '+', '-', '>', '<']

export default class Scanner {
  constructor() {
  }

  scan(expression: string) {
    let tokens: Array<Token> = [];

    let tokenizer = new Tokenizer(expression);

    let token;

    while (token = tokenizer.getNextToken()) {

      if(typeof token === 'boolean') throw Error('Unable to parse token');

      // Symbols
      if(symbols.some((k) => k === token)) {
        tokens.push({ type: 'symbol', value: token})
      }
      // Keywords
      else if(keywords.some((k) => k === token)) {
        tokens.push({ type:'keyword', value: token})
      }
      // Check for Number
      else if (isNumeric(token)) {
        tokens.push({ type:'number', value: token})
      }
      // Check for string
      else if (startsWithQuotes(token)) {
        if (matchBeginAndEnd(token, token[0])) {
          tokens.push({ type:'literal', value: stripBeginAndEnd(token)})
        }
        else {
          tokens.push({ error: `Token:${token} is not a valid string`});
        }
      }
      // Catch all
      else {
        this.scanBody(token, tokens);
      }
    }

    return tokens;
  }

  scanBody(token:string, tokens: Array<Token>) {
    switch (token) {
      case ops.equals:
      case ops.greaterThan:
      case ops.lessThan:
        tokens.push({ type:'op', value: token});
        break;
      default:
        tokens.push({ type:'identifier', value: token});
    }
  }

}

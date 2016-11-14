import Tokenizer from './tokenizer';
import { isNumeric, matchBeginAndEnd, startsWithQuotes, stripBeginAndEnd }
from './utils';

const states = { start:'start', identifier:'identifier', op:'op'}
const ops = { equals:'eq', greaterThan:'gt', lessThan:'lt'}
const keywords = ['and', 'or', 'true', 'false', 'today', 'tomorrow', 'yesterday'];
const symbols = ['(', ')', '+', '-', '>', '<']

export default class Scanner {
  constructor() {
  }

  scan(expression) {
    this.tokenState = 'start';
    this.tokens = [];

    let tokenizer = new Tokenizer(expression);

    while (tokenizer.hasNext()) {
      let token = tokenizer.getNextToken();

      // Symbols
      if(symbols.some((k) => k === token)) {
        this.tokens.push({ type:'symbol', value: token})
      }
      // Keywords
      else if(keywords.some((k) => k === token)) {
        this.tokens.push({ type:'keyword', value: token})
      }
      // Check for Number
      else if (isNumeric(token)) {
        this.tokens.push({ type:'number', value: token})
      }
      // Check for string
      else if (startsWithQuotes(token)) {
        if (matchBeginAndEnd(token, token[0])) {
          this.tokens.push({ type:'literal', value: stripBeginAndEnd(token)})
        }
        else {
          this.tokens.push({ error: `Token:${token} is not a valid string`});
        }
      }
      // Catch all
      else {
        this.scanBody(token);
      }
    }

    return this.tokens;
  }

  scanBody(token) {
    switch (token) {
      case ops.equals:
      case ops.greaterThan:
      case ops.lessThan:
        this.scanOp(token);
        break;
      default:
        this.scanProperty(token);
    }
  }

  scanProperty(propValue) {
    this.tokens.push({ type:'identifier', value: propValue})
  }

  scanOp(op) {
    this.tokens.push({ type:'op', value: op})
  }

  scanLiteral(literal) {
    this.tokens.push({ type:'literal', value: literal})
  }
}

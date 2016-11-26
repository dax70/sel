/* @flow */

import type {Token, TokenType, TokenError} from './types';

import type {
  NodeKind,
  Node,
  Expression,
  ConstantExpression,
  MemberExpression,
  UnaryExpression,
  BinaryExpression
} from './expressions'

export default class Parser {

  currentIndex: number;
  tokens: Array<Token>;
  expression: Expression;

  constructor(tokens: Array<Token>) {
    this.currentIndex = 0;
    this.tokens = tokens;
  }

  hasNext(): boolean {
    return this.currentIndex <= this.tokens.length;
  }

  getNextToken(): ?Token {
    if(!this.hasNext()) return null;

    return this.tokens[this.currentIndex++];
  }

  parse() {
    let token;

    while (token = this.getNextToken()) {
        this.expression = this.parseToken(token);
    }

    return this.expression;
  }

  parseToken(token: Token) {
    if(token) {
      const {type, value} = (token: Token);
      switch (type) {
        case 'identifier':
          return this.consumeMember(token);
        case 'number':
        case 'literal':
            return this.createConstant(token);
        case 'symbol':

          break;
        case 'keyword':
          break;
        default:

      }
    }
  }

  createConstant(token: ConstantExpression) {
    return {
      kind: 'constant',
      value: token.value,
      type: token.type
    }
  }

  consumeMember(token: Token): Expression {
    let expression: MemberExpression = {
      member: token.value,
      kind: 'member'
    };

    let nextToken = this.getNextToken();

    if(nextToken) {
      switch (nextToken.type) {
        case 'op':
          let binaryExp = this.buildOpExpression(expression, nextToken)
          return binaryExp;
      }
    }

    return expression;
  }

  convertOp(op: string): NodeKind {
    // Flow casting
    return ((op: any) : NodeKind);
  }

  buildOpExpression(leftExp: Expression, token: Token) {
    // parse right
    const nextToken = this.getNextToken();

    if(!nextToken) throw new Error('right side of expression expected');

    const rightExp = this.parseToken(nextToken);

    let binaryExp: BinaryExpression = {
      left: leftExp,
      kind: this.convertOp(token.value),
      right: rightExp
    }

    return binaryExp;
  }

}

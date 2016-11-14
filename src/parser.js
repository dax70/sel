/* @flow */

import type {Token, TokenType, TokenError} from './types';

const NodeKindValues = {
  member: 'member',
  equals: 'equals',
  greaterThan: 'greaterThan',
  lessThan: 'lessThan',
  and:'and',
  or:'or'
}

type NodeKind = $Keys<typeof NodeKindValues>;

type Node = { kind: NodeKind }
interface Expression extends Node {}
interface MemberExpression extends Node { member: string }
interface UnaryExpression extends Expression { node: Expression }
interface BinaryNode extends Expression { right:Expression, left: Expression }

export default class Parser {

  parse(tokens: Array<Token>) {
    let expressions: Array<Expression> = [];

    for(let token of tokens) {
      if(token.type) {
        const type = token.type;
        switch (type) {
          case 'identifier':
            let member: MemberExpression = { member: token.value, kind: NodeKindValues.member}
            expressions.push(member)
            break;
          case 'symbol':

            break;
          case 'keyword':
            break;
          case 'op':
            break;
          default:

        }
      }
    }
  }
}

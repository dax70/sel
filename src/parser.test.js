/* @flow */
import expect from 'expect';
import type {Token, TokenType, TokenError} from './types';
import Parser from './parser';
import type {
  NodeKind,
  Node,
  Expression,
  ConstantExpression,
  MemberExpression,
  UnaryExpression,
  BinaryExpression
} from './expressions'

describe('Parser tests', () => {
  it('Iterates over simple token', ()=> {
    let input: Array<Token> = [{ value:'foo', type: 'literal' }];
    let expected = { value:'foo', type: 'literal' };

    let parser = new Parser(input);

    let actual = parser.getNextToken();

    let end = parser.getNextToken();

    expect(expected).toEqual(actual);
    expect(end).toBeFalsy();
  })

  it('Builds Member expression', () => {
    let input = [{type:'identifier', value:'amount'}];
    let expected: MemberExpression = { member: 'amount', kind: 'member'};

    let parser = new Parser(input);
    let actual = parser.parse();

    expect(expected).toEqual(actual);
  })

  it('Builds Constant Literal expression', () => {
    let input = [{type:'literal',value:'foo'}];
    let expected: ConstantExpression = {
      value: 'foo',
      kind: 'constant',
      type: 'literal'
    };

    let parser = new Parser(input);
    let actual = parser.parse();

    expect(expected).toEqual(actual);
  })

  it('Builds Constant Number expression', () => {
    let input = [{type:'number',value:'200'}];
    let expected: ConstantExpression = {
      value: '200',
      kind: 'constant',
      type: 'number'
    };

    let parser = new Parser(input);
    let actual = parser.parse();

    expect(expected).toEqual(actual);
  })

  it('Predicate Expression with equals a number', () => {
    let input = [{type:'identifier', value:'price'},
                    {type:'op', value:'eq'},
                    {type:'number',value:'200'}];

    let expected: BinaryExpression = {
      left: {
        member: 'price',
        kind: 'member'
      },
      kind: 'eq',
      right: {
        value: '200',
        kind: 'constant',
        type: 'number'
      }
    }

    let parser = new Parser(input);
    let actual = parser.parse();

    expect(expected).toEqual(actual);
  })
})

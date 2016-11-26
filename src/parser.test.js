import expect from 'expect';
import type {Token, TokenType, TokenError} from './types';
import Parser from './parser';

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
})


import expect from 'expect';
import Tokenizer from './tokenizer';

describe('Tokenizer tests', () => {
  it('Echo foo is foo', ()=> {
    let input = 'foo';
    let expected = 'foo';

    let tokenizer = new Tokenizer(input);
    let actual = tokenizer.getNextToken();

    let end = tokenizer.getNextToken();

    expect(expected).toEqual(actual);
    expect(end).toBeFalsy();
  })

  it('Leading Whitespace', () => {
    let input = ' foo'
    let expected = 'foo';

    let tokenizer = new Tokenizer(input);
    let actual = tokenizer.getNextToken();
    let end = tokenizer.getNextToken();

    expect(end).toBeFalsy();
    expect(expected).toEqual(expected);
  })

  it('Leading Whitespace x2', () => {
    let input = '  foo'
    let expected = 'foo';

    let tokenizer = new Tokenizer(input);
    let actual = tokenizer.getNextToken();
    let end = tokenizer.getNextToken();

    expect(end).toBeFalsy();
    expect(expected).toEqual(expected);
  })

  it('Trailing Whitespace', () => {
    let input = 'foo '
    let expected = 'foo';

    let tokenizer = new Tokenizer(input);
    let actual = tokenizer.getNextToken();
    let end = tokenizer.getNextToken();

    expect(end).toBeFalsy();
    expect(expected).toEqual(expected);
  })

  it('Trailing Whitespace x2', () => {
    let input = 'foo  '
    let expected = 'foo';

    let tokenizer = new Tokenizer(input);
    let actual = tokenizer.getNextToken();
    let end = tokenizer.getNextToken();

    expect(end).toBeFalsy();
    expect(expected).toEqual(expected);
  })

  it('Leading and trailing Whitespace', () => {
    let input = ' foo '
    let expected = 'foo';

    let tokenizer = new Tokenizer(input);
    let actual = tokenizer.getNextToken();
    let end = tokenizer.getNextToken();

    expect(end).toBeFalsy();
    expect(expected).toEqual(expected);
  })

  it('Token count 1', () => {
    const expected = 1;
    let actual = 0;
    let tokenizer = new Tokenizer('foo');

    while(tokenizer.getNextToken()) {
      actual++;
    }
    expect(expected).toEqual(expected);
  })

  it('Token count 2', () => {
    const expected = 2;
    let actual = 0;
    let tokenizer = new Tokenizer('foo bar');

    while(tokenizer.getNextToken()) {
      actual++;
    }
    expect(expected).toEqual(expected);
  })

  it('Token count 3', () => {
    const expected = 3;
    let actual = 0;
    let tokenizer = new Tokenizer('foo bar baz');

    while(tokenizer.getNextToken()) {
      actual++;
    }
    expect(expected).toEqual(expected);
  })

  it('Token count 3 with leading whitespace', () => {
    const expected = 3;
    let actual = 0;
    let tokenizer = new Tokenizer(' foo bar baz');

    while(tokenizer.getNextToken()) {
      actual++;
    }
    expect(expected).toEqual(expected);
  })

  it('Token count 3 with leading whitespace x2', () => {
    const expected = 3;
    let actual = 0;
    let tokenizer = new Tokenizer('  foo bar baz');

    while(tokenizer.getNextToken()) {
      actual++;
    }
    expect(expected).toEqual(expected);
  })

  it('Token count 3 with trailing whitespace', () => {
    const expected = 3;
    let actual = 0;
    let tokenizer = new Tokenizer('foo bar baz ');

    while(tokenizer.getNextToken()) {
      actual++;
    }
    expect(expected).toEqual(expected);
  })

  it('Token count 3 with trailing whitespace x2', () => {
    const expected = 3;
    let actual = 0;
    let tokenizer = new Tokenizer('foo bar baz  ');

    while(tokenizer.getNextToken()) {
      actual++;
    }
    expect(expected).toEqual(expected);
  })

  it('Token count 3 with whitespace in between tokens x2', () => {
    const expected = 3;
    let actual = 0;
    let tokenizer = new Tokenizer('foo  bar  baz  ');

    while(tokenizer.getNextToken()) {
      actual++;
    }
    expect(expected).toEqual(expected);
  })
})

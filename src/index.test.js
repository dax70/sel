import expect from 'expect';
import {Scanner, Tokenizer} from './';

describe('Index test', ()=> {
  it('Scanner is accessible', ()=> {
    let scanner = new Scanner();

    expect(scanner).toExist();
  })

  it('Scanner can scan', ()=> {
    let scanner = new Scanner();

    expect(scanner.scan('')).toExist();
  })

  it('Tokernizer is accessible', ()=> {
    let tokenizer = new Tokenizer('');

    expect(tokenizer).toExist();
  })

})

import expect from 'expect';
import Scanner from './scanner';

describe('Scanner tests', () => {

  it('Predicate equals with number', () => {
    let input = 'price eq 200'
    let expected = [{type:'identifier', value:'price'},
                    {type:'op', value:'eq'},
                    {type:'number',value:'200'}];

    let scanner = new Scanner();
    let actual = scanner.scan(input);

    const expectedJSON = JSON.stringify(expected);
    const actualJSON = JSON.stringify(actual);

    expect(expectedJSON).toEqual(actualJSON);
  })

  it('Predicate greater than with number', () => {
    let input = 'amount gt 200'
    let expected = [{type:'identifier', value:'amount'},
                    {type:'op', value:'gt'},
                    {type:'number',value:'200'}];

    let scanner = new Scanner();
    let actual = scanner.scan(input);

    const expectedJSON = JSON.stringify(expected);
    const actualJSON = JSON.stringify(actual);

    expect(expectedJSON).toEqual(actualJSON);
  })

  it('Predicate equals with literal', () => {
    let input = 'price eq "foo"'
    let expected = [{type:'identifier', value:'price'},
                    {type:'op', value:'eq'},
                    {type:'literal',value:'foo'}];

    let scanner = new Scanner();
    let actual = scanner.scan(input);

    const expectedJSON = JSON.stringify(expected);
    const actualJSON = JSON.stringify(actual);

    expect(expectedJSON).toEqual(actualJSON);
  })

  it('Predicate equals with and', () => {
    let input = 'name eq "bob" and age gt 5'
    let expected = [{type:'identifier', value:'name'},
                    {type:'op', value:'eq'},
                    {type:'literal',value:'bob'},
                    {type:'keyword', value:'and'},
                    {type:'identifier', value:'age'},
                    {type:'op', value:'gt'},
                    {type:'number', value:'5'}];

    let scanner = new Scanner();
    let actual = scanner.scan(input);

    const expectedJSON = JSON.stringify(expected);
    const actualJSON = JSON.stringify(actual);

    expect(expectedJSON).toEqual(actualJSON);
  })

  it('Predicate less than with today', () => {
    let input = 'showtime lt today'
    let expected = [{type:'identifier', value:'showtime'},
                    {type:'op', value:'lt'},
                    {type:'keyword',value:'today'}];

    let scanner = new Scanner();
    let actual = scanner.scan(input);

    const expectedJSON = JSON.stringify(expected);
    const actualJSON = JSON.stringify(actual);

    expect(expectedJSON).toEqual(actualJSON);
  })

  it('Predicate less than (alt) with today', () => {
    let input = 'showtime > today'
    let expected = [{type:'identifier', value:'showtime'},
                    {type:'symbol', value:'>'},
                    {type:'keyword',value:'today'}];

    let scanner = new Scanner();
    let actual = scanner.scan(input);

    const expectedJSON = JSON.stringify(expected);
    const actualJSON = JSON.stringify(actual);

    expect(expectedJSON).toEqual(actualJSON);
  })

})

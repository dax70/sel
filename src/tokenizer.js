/* @flow */

function isWhiteSpace(text: string) {
  // Consider checking other chars [Tabs, nonBreakingSpace, newLine, etc]
  // and perhaps by charCode (more reliable?)
  return text === ' ';
}

export default class Tokenizer {
  expression: string;
  currentIndex: number;

  constructor(expression: string){
    this.expression = expression;
    this.currentIndex = 0;
  }

  getNextChar() {
    return this.expression.charAt(this.currentIndex);
  }

  hasNext(): boolean {
    return this.currentIndex <= this.expression.length;
  }

  consumeWhiteSpace() {
    while (this.hasNext() && isWhiteSpace(this.getNextChar())) {
      this.currentIndex++;
    }
  }

  moveUntilWhiteSpace() {
    while (this.hasNext() && !isWhiteSpace(this.getNextChar())) {
      this.currentIndex++;
    }
  }

  getNextToken(): string| boolean {
    if(!this.hasNext()) return false;

    this.consumeWhiteSpace();
    let snapshot = this.currentIndex;

    this.moveUntilWhiteSpace();

    return this.expression.substring(snapshot, this.currentIndex);
  }
}

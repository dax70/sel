
function isWhiteSpace(text) {
  // Consider checking other chars [Tabs, nonBreakingSpace, newLine, etc]
  // and perhaps by charCode (more reliable?)
  return text === ' ';
}

export default class Tokenizer {
  constructor(expression){
    this.expression = expression;
    this.currentIndex = 0;
  }

  getNextChar() {
    return this.expression.charAt(this.currentIndex);
  }

  hasNext() {
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

  getNextToken() {
    if(!this.hasNext()) return false;

    this.consumeWhiteSpace();
    let snapshot = this.currentIndex;

    this.moveUntilWhiteSpace();

    return this.expression.substring(snapshot, this.currentIndex);
  }
}

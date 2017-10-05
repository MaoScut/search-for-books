class History {
  constructor(actionNumbersBeforeUserAccess) {
    this.actionNumbersBeforeUserAccess = actionNumbersBeforeUserAccess;
    this.past = [];
    this.present = undefined;
    this.future = [];
    this.thereIsAPresent = this.thereIsAPresent.bind(this);
    this.thereIsAPast = this.thereIsAPast.bind(this);
    this.thereIsAFuture = this.thereIsAFuture.bind(this);
    this.setPresentState = this.setPresentState.bind(this);
    this.movePresentToPast = this.movePresentToPast.bind(this);
    this.movePresentToFuture = this.movePresentToFuture.bind(this);
    this.movePastToPresent = this.movePastToPresent.bind(this);
    this.moveFutureToPresent = this.moveFutureToPresent.bind(this);
    this.push = this.push.bind(this);
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
    this.gotoState = this.gotoState.bind(this);
  }
  thereIsAPresent() {
    return this.present !== undefined;
  }
  thereIsAPast() {
    return this.past.length > 0;
  }
  thereIsAFuture() {
    return this.future.length > 0;
  }
  setPresentState(state) {
    this.present = state;
  }
  movePresentToPast() {
    this.past.push(this.present);
  }
  movePresentToFuture() {
    this.future.push(this.present);
  }
  movePastToPresent() {
    this.setPresentState(this.past.pop());
  }
  moveFutureToPresent() {
    this.setPresentState(this.future.pop());
  }
  push(currentState) {
    if (this.thereIsAPresent()) {
      this.movePresentToPast();
    }
    this.setPresentState(currentState);
  }
  undo() {
    if (this.thereIsAPresent()) {
      this.movePresentToFuture();
      this.movePastToPresent();
    }
  }
  redo() {
    if (!this.thereIsAFuture()) {
      return;
    }
    if (this.thereIsAPresent()) {
      this.movePresentToPast();
    }
    this.moveFutureToPresent();
  }
  gotoState(i) {
    const index = Number(i);
    const allStates = [...this.past, this.present, ...this.future];
    this.present = allStates[index];
    this.past = allStates.slice(0, index);
    this.future = allStates.slice(index + 1);
  }
}
export default new History(5);

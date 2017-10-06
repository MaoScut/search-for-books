// 如何解决在用户操作之前的action，这部分不能回溯
class History {
  constructor(actionNumbersBeforeUserAccess) {
    this.actionNumbersBeforeUserAccess = actionNumbersBeforeUserAccess;
    this.past = [];
    this.present = undefined;
    this.future = [];
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
    // 当前有状态，那么存到过去
    // if ( --this.actionNumbersBeforeUserAccess >= 0) return;
    if (this.thereIsAPresent()) {
      this.movePresentToPast();
    }
    // 设置新的状态
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
export default new History(0);

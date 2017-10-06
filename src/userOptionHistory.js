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
function TimeMachine() {
  const states = [];
  let pointer = -1;
  function thereIsAPast() {
    return pointer > 0;
  }
  function thereIsAFuture() {
    return pointer < states.length - 1;
  }
  function push(state) {
    debugger;
    pointer += 1;
    // 如果想保留0到某索引上的元素，后面的都删除（但是索引位置的元素仍保留）
    // length表示数组中保留多少个元素，那么0到某索引有多少个元素呢？当然是索引+1咯
    states.length = pointer + 1;
    states[pointer] = state;
  }
  function undo() {
    if (thereIsAPast()) {
      pointer -= 1;
    }
  }
  function redo() {
    if (thereIsAFuture()) {
      pointer += 1;
    }
  }
  function getCurrentState() {
    return states[pointer];
  }
  function getCurrentStateIndex() {
    return pointer;
  }
  function getStatesLength() {
    return states.length;
  }
  function gotoState(index) {
    if (index >= 0 && index <= states.length - 1) {
      pointer = index;
    } else {
      console.error('索引越界！');
    }
  }
  return {
    push,
    undo,
    redo,
    getCurrentState,
    gotoState,
    getStatesLength,
    thereIsAFuture,
    thereIsAPast,
    getCurrentStateIndex,
  };
}
const timeMachine = TimeMachine();
export default timeMachine;

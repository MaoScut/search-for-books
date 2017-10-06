import React from 'react';

const History = ({
  // past, present, future, undo, redo, gotoState, previousActionNum
  statesLength, canRedo, canUndo, undo, redo, gotoState, currentIndex,
}) => {
  const styles = {
    container: {
      marginLeft: 20,
      cursor: 'pointer',
    },
    link: {
      textDecoration: 'none',
      cursor: 'pointer',
    },
    input: {
      cursor: 'pointer',
    },
  };
  const RightArrow = () => (
    <a role="presentation" style={styles.link} onClick={() => redo()}>
      &#8594;
    </a>
  );
  const LeftArrow = () => (
    <a role="presentation" style={styles.link} onClick={() => undo()}>
      &#8592;
    </a>
  );
  // const maxRange = () => ((past ? past.length : 0) +
  //   (present ? 1 : 0) +
  //   (future ? future.length : 0)) - 1;
  const maxRange = statesLength - 1;
  return (
    <span>
      History
      <input
        type="range"
        min={0}
        max={maxRange}
        value={currentIndex}
        style={styles.input}
        onChange={e => gotoState(e.target.value)}
      />
      {canUndo ? <LeftArrow /> : null}
      {canRedo ? <RightArrow /> : null}
    </span>
  );
};
export default History;

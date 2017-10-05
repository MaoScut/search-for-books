import React from 'react';

const History = ({
  past, present, future, undo, redo, gotoState,
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
  const maxRange = () => ((past ? past.length : 0) +
    (present ? 1 : 0) +
    (future ? future.length : 0)) - 1;
  return (
    <span>
      History
      <input
        type="range"
        min={5}
        max={maxRange()}
        value={past ? past.length : 0}
        style={styles.input}
        onChange={e => gotoState(e.target.value)}
      />
      {(past && past.length >= 5) ? <LeftArrow /> : null}
      {(future && future.length > 0) ? <RightArrow /> : null}
    </span>
  );
};
export default History;

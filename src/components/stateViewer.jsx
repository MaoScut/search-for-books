import React from 'react';

const StateViewer = ({
  topic,
  books,
  currentStatus,
  displayMode,
  history,
}) => {
  const styles = {
    container : {
      margin: 20,
      width: 400,
      fontFamily: 'tahoma',
    },
    title: {
      fontSize: 24,
      marginTop: 25,
    },
    state: {
      marginTop: 10,
    },
    hr: {
      marginTop: 50,
    },
  };
  return (
    <div style={styles.container}>
      <hr style={styles.hr} />
      <div style={styles.title}>
        Application State
      </div>
      <div style={styles.state}>
        Topic: {topic} <br />
        displayMode: {displayMode} <br />
        Books displayed: {books.length} <br />
        Actions processed: {history.past.length + history.future.length} <br />
        Current action: {history.past.length}
      </div>
    </div>
  );
};
export default StateViewer;

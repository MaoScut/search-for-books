import React from 'react';
import DisplayModeContainer from '../containers/displayMode';
import TopicSelectorContainer from '../containers/topicSelector';
import HistoryContainer from '../containers/history';


const Controls = ({
  topic,
  displayMode,
}) => {
  const styles = {
    controls: {
      padding: 15,
      marginBottom: 25,
    },
  };
  return (
    <div style={styles.controls}>
      <TopicSelectorContainer topic={topic} />
      <DisplayModeContainer displayMode={displayMode} />
      <HistoryContainer />
    </div>
  );
};
export default Controls;

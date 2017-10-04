import React from 'react';
import DisplayModeContainer from '../containers/displayMode';
import TopicSelectorContainer from '../containers/topicSelector';

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
    </div>
  );
};
export default Controls;

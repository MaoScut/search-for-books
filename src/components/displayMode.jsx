import React from 'react';

require('./book.css');

const DisplayMode = ({
  setListing,
  setThumbnail,
  displayMode,
}) => {
  const switchToListing = () => {
    setListing();
  };
  const switchToThumbnail = () => {
    setThumbnail();
  };
  const styles = {
    radio: {
      marginLeft: 10,
      cursor: 'poniter',
    },
    radioSpan: {
      marginLeft: 20,
      fontFamily: 'tahoma',
      fontSize: 16,
    },
  };
  return (
    <span>
      <span style={styles.radioSpan}>
        Thumbnail
      </span>
      <input
        type="radio"
        name="display"
        style={styles.radio}
        onChange={switchToThumbnail}
        checked={displayMode === 'THUMBNAIL'}
        value="thumbnail"
      />
      <span style={styles.radioSpan}>
        List
      </span>
      <input
        type="radio"
        name="display"
        style={styles.radio}
        onChange={switchToListing}
        checked={displayMode !== 'THUMBNAIL'}
        value="list"
      />
    </span>
  );
};
export default DisplayMode;

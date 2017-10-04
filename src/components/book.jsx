import React from 'react';

const Book = ({
  item,
  displayMode,
}) => {
  const styles = {
    links: {
      marginTop: 20,
    },
    link: {
      padding: 25,
    },
    image: {
      boxShadow: '3px 3px 3px #686868',
      marginBottom: 15,
    },
  };
  const linkMarkup = (currentItem, link) => (
    <div style={styles.links}>
      <a href={link} style={styles.link}>
        {currentItem.volumeInfo.title}
      </a>
    </div>
  );
  const thumbnailMarkup = (currentItem, link) => (
    <a href={link} style={styles.link}>
      <img
        src={currentItem.volumeInfo.imageLinks.thumbnail}
        style={styles.image}
        alt=""
      />
    </a>
  );
  const link = item.volumeInfo.canonicalVolumeLink;
  return (displayMode === 'THUMBNAIL' ?
    thumbnailMarkup(item, link) :
    linkMarkup(item, link));
  // return linkMarkup(item, link);
};
export default Book;

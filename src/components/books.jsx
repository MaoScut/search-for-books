import React from 'react';
import Book from './book';

const ReactCssTransitionGroup = require('react-addons-css-transition-group');

const Books = ({
  books,
  displayMode,
  currentStatus,
}) => {
  const styles = {
    container: {
      width: '100%',
    },
    spinner: {
      textAlign: 'center',
      width: '100%',
    },
  };
  const Spinner = () => (
    <div style={styles.spinner}>
      <img src="/images/spinner.gif" alt="spinner" />
    </div>
  );
  const bookMarkup = () => {
    let components = null;
    let bookItems = <span>No items!</span>;
    if (books.length > 0) {
      components = books.map((item) => {
        const key = displayMode === 'THUMBNAIL' ?
          item.id + 1 :
          item.id;
        bookItems = (
          <Book item={item} displayMode={displayMode} key={key} />
        );
        return bookItems;
      });
    }
    return components;
  };
  return (
    <div>
      {currentStatus !== 'Fetching...' ? null : <Spinner />}
      <div style={styles.container}>
        {/* <ReactCssTransitionGroup
          transitionName="books"
          transitionEnterTimeout={1000}
        > */}
        {bookMarkup()}
        {/* </ReactCssTransitionGroup> */}
      </div>
    </div>
  );
};
export default Books;

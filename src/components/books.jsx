import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Book from './book';


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
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeave={false}
        >
          {bookMarkup()}
        </CSSTransitionGroup>
      </div>
    </div>
  );
};
export default Books;

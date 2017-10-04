import React from 'react';
import ControlsContainer from './controls';
import BooksContainer from './books';

const titleStyle = {
  fontFamily: 'tahoma',
  fontSize: '24px',
  textAlign: 'center',
};
const Title = () => (
  <div style={titleStyle}>
    Book Search
  </div>
);

const App = () => (
  <div>
    <Title />
    <hr />
    <ControlsContainer />
    <BooksContainer />
  </div>
);
export default App;

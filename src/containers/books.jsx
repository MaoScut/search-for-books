import { connect } from 'react-redux';
import Books from '../components/books';

export default connect(
  state => ({
    books: state.books,
    currentStatus: state.currentStatus,
    displayMode: state.displayMode,
  }),
  null,
)(Books);

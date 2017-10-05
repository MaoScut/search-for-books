import { connect } from 'react-redux';
import StateViewer from '../components/stateViewer';
import stateHistory from '../stateHistory';

const mapStateToProps = state => ({
  books: state.books,
  topic: state.topic,
  currentStatus: state.currentStatus,
  displayMode: state.displayMode,
  history: stateHistory,
});

export default connect(
  mapStateToProps,
  null,
)(StateViewer);


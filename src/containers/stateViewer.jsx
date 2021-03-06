import { connect } from 'react-redux';
import StateViewer from '../components/stateViewer';
import stateHistory from '../userOptionHistory';

const mapStateToProps = state => ({
  books: state.books,
  topic: state.topic,
  currentStatus: state.currentStatus,
  displayMode: state.displayMode,
  actionsProcessed: stateHistory.getStatesLength(),
  currentActionIndex: stateHistory.getCurrentStateIndex(),
});

export default connect(
  mapStateToProps,
  null,
)(StateViewer);


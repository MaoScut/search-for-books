import { connect } from 'react-redux';
import Controls from '../components/controls';

export default connect(
  state => ({
    topic: state.topic,
    displayMode: state.displayMode,
  }),
  null,
)(Controls);

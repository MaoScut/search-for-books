import { connect } from 'react-redux';
import DisplayMode from '../components/displayMode';
import { setDisplayMode } from '../actions';

export default connect(
  null,
  dispatch => ({
    setListing: () => dispatch(setDisplayMode('LISTING')),
    setThumbnail: () => dispatch(setDisplayMode('THUMBNAIL')),
  }),
)(DisplayMode);

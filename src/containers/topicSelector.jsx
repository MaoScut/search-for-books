import { connect } from 'react-redux';
import TopicSelector from '../components/topicSelector';
import { setTopic, fetchBooks } from '../actions';

export default connect(
  state => ({
    topic: state.topic,
  }),
  dispatch => ({
    setTopic: topic => dispatch(setTopic(topic)),
    fetchTopic: (topic) => {
      dispatch(setTopic(topic));
      dispatch(fetchBooks());
    },
  }),
)(TopicSelector);

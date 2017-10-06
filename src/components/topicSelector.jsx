import React from 'react';

export default class TopicSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.topic || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    // what is it fucking doing?
    function putCursorAtEnd(input) {
      const value = input.value;
      input.value = '';
      input.value = value;
    }
    const input = this.input;
    input.focus();
    putCursorAtEnd(input);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      input: nextProps.topic,
    });
  }

  handleChange(e) {
    // this.props.setTopic(e.target.value);
    this.setState({
      input: e.target.value,
    });
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      // this.props.setTopic(this.state.input);
      this.props.fetchTopic(this.state.input);
    }
  }
  render() {
    const styles = {
      topic: {
        marginRight: 10,
        fontFamily: 'tahoma',
        fontSize: 18,
      },
      input: {
        fontFamily: 'tahoma',
        fontSize: 16,
        marginRight: 10,
      },
    };
    const topic = this.props.topic;
    return (
      <span>
        <span style={styles.topic}>
          Topic
        </span>
        <input
          type="text"
          ref={input => this.input = input}
          value={this.state.input}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </span>
    );
  }
}

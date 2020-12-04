import React from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(s => {
      return (
        <div className="item" key={s.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">{s.title}</div>
          <div className="description">{s.description}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  console.log(state)
  return { streams: Object.values(state.stream) };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
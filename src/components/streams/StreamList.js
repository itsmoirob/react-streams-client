import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }


  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>Edit</Link>
          <button className="ui button negative">Delete</button>
        </div>
      )
    }
  };


  renderList() {
    return this.props.streams.map(s => {
      return (
        <div className="item" key={s.id}>
          {this.renderAdmin(s)}

          <i className="large middle aligned icon camera" />
          <div className="content">
            {s.title}
            <div className="description">{s.description}</div>
          </div>
        </div>
      )
    })
  }


  renderCanCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">Create Stream</Link>
        </div>
      );
    }
  }


  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>

        {this.renderCanCreate()}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.stream),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
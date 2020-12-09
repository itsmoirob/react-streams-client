import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }


  renderActions(){
    return (
      <Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </Fragment>
    );
  }


  renderContent(){
    if(!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the Stream with title "${this.props.stream.title}"`;
  };

  render() {
    return (
      <div>
        StreamDelete
  
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id]
  }
};


export default connect(mapStateToProps, {fetchStream})(StreamDelete);
import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '36677933475-4g7k7lvcca3naj155iv2p91fkffsjsei.apps.googleusercontent.com',
        scope: 'email'
      })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
    });
  }


  onAuthChange = (isSignedIn) => {
    if (isSignedIn === true) {
      this.props.signIn();

    } else {
      this.props.signOut();
    }
  }


  onSignInClick = () => {
    this.auth.signIn();
  }


  onSignOutClick = () => {
    this.auth.signOut();
  }


  renderAuthButton() {
    if (this.props.isSignedIn === null)
      return null;

    else if (this.props.isSignedIn === true)
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon">Sign Out</i>
        </button>
      );

    else
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon">Sign in with Google</i>
        </button>
      );
  }


  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

const mapsStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapsStateToProps, { signIn, signOut })(GoogleAuth);
import React, { Component }  from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import { Link } from 'react-router';

class BinsShare extends Component {
  constructor() {
    super();
  }
  onShareClick(){
    const email = this.refs.email.value;
    Meteor.call('bins.share', this.props.bin, email)
  }
  renderShareList(){
    return this.props.bin.sharedWith.map(email => {
      return <a key={email}
                className="waves-effect waves-light btn">{email}
              </a>;
    });
  }
  render(){
    return (
      <footer className="bins-share">
        <form className="col s6">
          <div className="row">
            <div className="col s8">
              <input ref="email" placeholder="Share stuff" id="" type="text" class="validate" />
            </div>
            <div className="col s4">
              <a className="waves-effect waves-light btn" onClick={this.onShareClick.bind(this)}>Share Task</a>
            </div>
          </div>
          <div>
            Shared With:
          </div>
          <div>
            {this.renderShareList()}
          </div>
        </form>
      </footer>
    );
  }
}

export default BinsShare;

import React, { Component }  from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import { Link } from 'react-router';

class BinsShare extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <footer className="bins-share">
        <form className="col s6">
          <div className="row">
            <div className="col s8">
              <input placeholder="Share stuff" id="" type="text" class="validate" />
            </div>
            <div className="col s4">
              <a className="waves-effect waves-light btn">Share Task</a>
            </div>
          </div>
        </form>
      </footer>
    );
  }
}

export default BinsShare;

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
        BinsShare
      </footer>
    );
  }
}

export default BinsShare;

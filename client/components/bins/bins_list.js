import React, { Component }  from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {
   constructor() {
      super();
   }
   render() {
      console.log(this.props.bins)
      return (
         <div>BinsList</div>
      );
   }

}

// subscription
export default createContainer (() => {
   Meteor.subscribe('bins');
   return { bins: Bins.find({ }).fetch()};
},BinsList);

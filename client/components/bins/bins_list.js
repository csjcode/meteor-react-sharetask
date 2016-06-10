import React, { Component }  from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {
   constructor() {
      super();
   }
   renderList(){
      return this.props.bins.map(bin => {
         return (
            <li className="list-group-item" key={bin._id}>
               Bin {bin._id}
            </li>
         );
      });

   }
   render() {
      // console.log(this.props.bins)
      return (
         <ul className="list-group">
            {this.renderList()}
         </ul>
      );
   }

}

// subscription
export default createContainer (() => {
   Meteor.subscribe('bins');
   return { bins: Bins.find({ }).fetch()};
},BinsList);

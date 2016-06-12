import React, { Component }  from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import { Link } from 'react-router';

class BinsList extends Component {
   constructor() {
      super();
   }
   onBinRemove(bin){
            Meteor.call('bins.remove', bin)
   }
   renderList(){
      return this.props.bins.map(bin => {
         const urlBin = `/bins/${bin._id}`;
         return (
            <li className="collection-item" key={bin._id}>
               <Link to={urlBin}>Bin {bin._id}</Link>
               <span className="secondary-content">
                  <button
                     className="btn btn__remove #b71c1c red darken-4 white-text waves-effect waves-light"
                     onClick={() => this.onBinRemove(bin)}>
                     Remove
                  </button>
               </span>
            </li>
         );
      });

   }
   render() {
      // console.log(this.props.bins)
      return (
         <ul className="collection">
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

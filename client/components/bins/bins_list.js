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
               <span className="collection-item-bin hoverable">Bin# <Link to={urlBin} className="">{bin._id}</Link></span>
               <span className="secondary-content">
                  <Link to={urlBin}>
                     <a
                        className="btn btn__mode_edit btn-floating #b71c1c blue darken-4 white-text waves-effect waves-light">
                        <i className="material-icons">mode_edit</i>
                     </a>
                  </Link>
                  <button
                     className="btn btn__remove btn-floating #b71c1c red darken-4 white-text waves-effect waves-light"
                     onClick={() => this.onBinRemove(bin)}>
                     <i className="material-icons">delete</i>
                  </button>
               </span>
            </li>
         );
      });

   }
   render() {
      // console.log(this.props.bins)
      return (
         <ul className="collection with-header">
            <li className="collection-header"><h4>Share Tasks</h4></li>
            {this.renderList()}
         </ul>
      );
   }

}

// subscription
export default createContainer (() => {
   Meteor.subscribe('bins');
   Meteor.subscribe('sharedBins');

   return { bins: Bins.find({ }).fetch()};
},BinsList);

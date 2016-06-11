import React, { Component }  from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {
   constructor() {
      super();
   }

   onBinClick(event) {
      event.preventDefault();

      Meteor.call('bins.insert',(error, binId) => {
         // console.log(bin);
         browserHistory.push(`/bins/${binId}`)
      });
   }

   render(){
      return (
         <nav className="nav navbar-default">
            <div className="navbar-header">
               <Link to="/" href="" className="navbar-brand">ShareTask</Link>
            </div>
            <ul className="nav navbar-nav">
               <li>
                  <Accounts />
               </li>
               <li>
                  <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
               </li>
            </ul>
         </nav>
      );
   }
}

export default Header;

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
         <nav>
            <div className="nav-wrapper">
               <Link to="/" href="" className="brand-logo">ShareTask</Link>
               <ul className="right hide-on-sm-and-down">
                  <li>
                     <a href="/">List Bins</a>
                  </li>
                  <li>
                     <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                  </li>
                  <li>
                     <Accounts />
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}

export default Header;

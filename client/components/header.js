import React, { Component }  from 'react';
import Accounts from './accounts';

class Header extends Component {
   constructor() {
      super();
   }
   render(){
      return (
         <nav className="nav navbar-default">
            <div className="navbar-header">
               <a href="" className="navbar-brand">ShareTask</a>
            </div>
            <ul className="nav navbar-nav">
               <li>
                  <Accounts />
               </li>
               <li>
                  <a href="">Create Bin</a>
               </li>
            </ul>
         </nav>
      );
   }
}

export default Header;

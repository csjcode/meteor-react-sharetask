import React, { Component }  from 'react';

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
                  <a href="">Signup</a>
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

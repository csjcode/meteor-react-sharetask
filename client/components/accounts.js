import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
   componentDidMount(){
      // Render Blaze accounts form, place it in Accounts rendered div
      this.view = Blaze.render(Template.loginButtons,
         ReactDOM.findDOMNode(this.refs.container));
   }

   componentWillUnmount () {
      // find forms created and destroy them (use this for any rendering libraries such as D3 etc.)
      Blaze.remove(this.view);
   }

   render() {
      return (
         <div ref="container"></div>
      );
   }
}

export default Accounts;

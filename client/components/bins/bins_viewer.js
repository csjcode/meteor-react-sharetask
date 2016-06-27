import React,{ Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
   constructor() {
      super();
   }
   render(){
      const rawHTML = markdown.toHTML(this.props.bin.content);
      return (
            <div className="col s6">
               <h5>Viewer</h5>
               <div dangerouslySetInnerHTML={{__html:rawHTML}}></div>
            </div>

      );
   }
}

export default BinsViewer;

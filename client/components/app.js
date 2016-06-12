import React from 'react';
import Header from './header';

export default (props) => {
  return (
    <div>
      <Header />
      <div className="container">

        <div className="row">
          <div className="col s1"></div>
          <div className="col s10">
            {props.children}
          </div>
          <div className="col s1"></div>
        </div>

      </div>
    </div>
  );
};

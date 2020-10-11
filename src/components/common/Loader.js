import React from 'react';

class Loader extends React.Component {
  render() {
    return (
      <div className="loading-content">
        <div>
          <p>Please wait.</p>
          <p className="loading-txt">Please sit tight while we get this page loaded.</p>
          <div className="loader"></div>
        </div>
      </div>
    );
  }
}
export default Loader;

import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component {
	render() {
  	return (
    	<div class="box" width={this.props.width} height={this.props.height} style={{backgroundColor:this.props.color}}>&nbsp;</div>
    );
  }
}

ReactDOM.render(
  (
  <div>
  	<Box width="100" height="100" color="#0000ff"/>
    <Box width="100" height="100" color="#00ff00"/>
  </div>
  ), document.getElementById('container')
);

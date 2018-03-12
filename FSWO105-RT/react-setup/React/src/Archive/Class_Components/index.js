import React from 'react';
import ReactDOM from 'react-dom';


  
class Hello extends React.Component {
    render() {
        return (
            <div>
              <h1>Hello, {this.props.name}!</h1>
            </div>
          );     
    }
}

ReactDOM.render(
    <div>
      <Hello name="Nikki"/>
      <Hello name="Michael"/>
      <Hello name="Andrew"/>
    </div>,
    document.getElementById('root')
);
  
class TodoList extends React.Component {
    render(){
      return (
        <div>
          <h1></h1>
        </div>
      );
    }
  }
  
  TodoList.propTypes = {
    item1:PropTypes.bool,
    item2: PropTypes.bool,
    item3: PropTypes.bool
  };
  
  TodoList.default.Props = {
    item1: false,
    item2: false,
    item3: false
  }
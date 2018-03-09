import React from 'react';
import ReactDOM from 'react-dom';

// Hands On Project 1

 class TodoList extends React.Component {
    render(){

        return(          
            <ul class="TodoList" title="Student todo" ref={c
            => this.autocomplete = c}>
            </ul>
        );
    }
 }

const items = [
    'Sign up for code review',
    'Finish TodoList component',
    'Get lots of sleep'
];

ReactDOM.render(
    <TodoList tags={items}/>,
    document.getElementById('root')
);
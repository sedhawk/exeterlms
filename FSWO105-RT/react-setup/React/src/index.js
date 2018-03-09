import React from 'react';
import ReactDOM from 'react-dom';

// Hands On Project 1

ReactDOM.render(
    <div>
        <h1>Tips for breaking down a new concept</h1>
        <div>
            <ul>
                <li>Many concepts can't be tackled all at once</li>
                <ul>
                    <li>Work with the parts you can understand</li>
                    <li>Take breaks to stay fresh</li>
                </ul>
                <li>Develop a plan to learn the parts you don't know</li>
                <ul>
                    <li>Start with the parts that you know</li>
                    <li>Build new concepts on top</li>
                </ul>
            </ul>
        </div>
    </div>,
    document.getElementById('root')
  )

//Hands On Project 2
// Convert the following JSX
/*
const output =
  <div>
    <p>React: A JavaScript library for building user interfaces</p>
    <p>Redux: A predictable state container for JavaScript apps</p>
    <p>Reselect: A simple selector library for Redux</p>
  </div>;

ReactDOM.render(output, document.getElementById('root'));
*/
const libraries = [
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces'
    },
    {
      title: 'Redux',
      description: 'A predictable state container for JavaScript apps'
    },
    {
      title: 'Reselect',
      description: 'A simple selector library for Redux'
    }
  ];
  
  class Library extends React.Component {
    render() {
      return <p>{this.props.title}: {this.props.description} </p>;
  }
  }
  
  const output = libraries.map(
      lib => <Library title={lib.title} description={lib.description} />
  );
  ReactDOM.render(<div>{output}</div>, 
  document.getElementById('root'));

//Another version of Hands On Project 2
const libraries2 = [
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces'
    },
    {
      title: 'Redux',
      description: 'A predictable state container for JavaScript apps'
    },
    {
      title: 'Reselect',
      description: 'A simple selector library for Redux'
    }
  ];
  
  class Library2 extends React.Component {
    render() {
      return <li>{this.props.title}: {this.props.description} </li>;
      }
  }
  
  class LibraryCollection extends React.Component {
      render() {
        return (
        <ol>
            {this.props.children}
        </ol>
      );
    }
  }
  
  ReactDOM.render(
      <LibraryCollection>
        <Library2 title={libraries2[0].title} description={libraries2[0].description}/>
      <Library2 title={libraries2[1].title} description={libraries2[1].description}/>
         <Library2 title={libraries2[2].title} description={libraries2[2].description}/>
    </LibraryCollection>, 
  document.getElementById('root'));

//Version 3 of Hands On Project 2
const libraries3 = [
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces'
    },
    {
      title: 'Redux',
      description: 'A predictable state container for JavaScript apps'
    },
    {
      title: 'Reselect',
      description: 'A simple selector library for Redux'
    }
  ];
  
  class Library3 extends React.Component {
    render() {
      return <li>{this.props.title}: {this.props.description} </li>;
      }
  }
  
  class LibraryCollection3 extends React.Component {
      render() {
        return (
        <ol>
            {this.props.children}
        </ol>
      );
    }
  }
  
  ReactDOM.render(
    <LibraryCollection3>
        {libraries3.map(lib => <Library3 title={lib.title} description={lib.description}/>)}
    </LibraryCollection3>, 
  document.getElementById('root'));

// Version 4 of Hands On Project 2
const libraries4 = [
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces'
    },
    {
      title: 'Redux',
      description: 'A predictable state container for JavaScript apps'
    },
    {
      title: 'Reselect',
      description: 'A simple selector library for Redux'
    }
  ];
  
  class Library4 extends React.Component {
    render() {
      return <li>{this.props.title}: {this.props.description} </li>;
      }
  }
  
  class LibraryCollection4 extends React.Component {
      render() {
        return (
        <ul>
            {this.props.children}
        </ul>
      );
    }
  }


 
  ReactDOM.render(
    <div>
        <h3>This is version 1</h3>
        {output}
        <h3>This is version 2</h3>
      <LibraryCollection>
          <Library2 title={libraries2[0].title} description={libraries2[0].description}/>
      <Library2 title={libraries2[1].title} description={libraries2[1].description}/>
          <Library2 title={libraries2[2].title} description={libraries2[2].description}/>
      </LibraryCollection>
      <h3>This is version 3</h3>
      <LibraryCollection3>
          {libraries3.map(lib => <Library3 title={lib.title} description={lib.description}/>)}
      </LibraryCollection3>
      <h3>This is version 4</h3>
      <LibraryCollection4>
          <Library4 title={libraries4[0].title} description={libraries4[0].description}/>
      <Library4 title={libraries4[1].title} description={libraries4[1].description}/>
          <Library4 title={libraries4[2].title} description={libraries4[2].description}/>
      </LibraryCollection4>
      <h3>This is Project 3</h3>
      {majorGeneral}
  </div>, 
document.getElementById('root'));

  //Hands On Project 3
// convert the following JSX
/*
const output3 = <div>
    <div>
        <h1 id="title">Major General's Song</h1>
        <div>
          <p>Author: Gilbert and Sullivan</p>
          <p>1879</p>
        </div>
    </div>
</div>

ReactDOM.render(output3, document.getElementById('root'));
*/
//to be generated by the use of this function:
const header = makeHeader({ id: 'title', text: "Major General's Song" });
const author = makeBody({ author: 'Gilbert and Sullivan', year: 1879 });
const majorGeneral = makeSong(header, author);  
//lyrics? I think this is a typo, so I switched it to author

//make 3 functions
/*let makeHeader = (data) => <h1 id={data.title}>{data.text}></h1>
let makeBody = (data) => <p id={data.author}>{data.year}></p>
let makeSong = (header, lyrics) => (
        <div>
            <div>header</div>
            <div>lyrics</div>
        </div>);

ReactDOM.render({makeSong}, document.getElementById('root'));
*/
let makeHeader = (props) => {
    return <h1 id={props.id}>{props.text}></h1>;
};

let makeBody = (props) => {
    return (
         <div>
           <p>{props.author}</p>
         <p>{props.year}</p>
       </div>
     );
};

let makeSong = ({header, author}) => (
    <div>{header}{author}</div>
);
ReactDOM.render(majorGeneral, document.getElementById('root'));

/*
QUICK NOTES:  (for proj 3)
class MyComponent extends React.Component {
 render() {
   return <div>{this.props.text}</div>;
 }
}

can be shortened into a simple arrow function

let MyComponent = (props) => <div>{props.text}</div>

we can do this in the JSX
<MyComponent text="hello"/>

Destructuring
let MyComponent = ({ text }) => <div>{text}</div>;


React will see the JSX component has a text prop and it will 
pass the props object into the function automatically
so for this lesson we don't need all this class stuff.
We can just make a simple function and it will be a new tag,
therefore, "functional stateless component functions".

*/
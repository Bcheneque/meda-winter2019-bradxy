//Include React packages to use in program.
import React from 'react';
import ReactDOM from 'react-dom';


// Create our first component, barebones.
// first argument is name of element, second argument is attributes, third is content of element.
const title = React.createElement(
    "h1",
    {
        id: "top",
    },
    "Hello World!"
);

let someTitle = "Welcome to my React website!";

const paragraph = React.createElement(
    "p",
    null,
    "This is a paragraph!"
);

function About(props) {
    return (<p>This is officially a React Function Component</p>
    );
}

function H1Generator(props) {
    return (
        <h1 className="myCSSClass">{props.text}</h1>
    );
}

const H2Generator = (props) => {
    return (<h2>{props.something}</h2>);
}

class Counter extends React.Component {
    constructor() {
        super();
// Review special way to update the states for Class Components.
        this.state = {
            score: 0
        };
    }

    render() {
        return (<p> The current score is: {this.props.tempScore} </p>);
    }
}

const idOfDiv = "test";

// JSX version of createElement();
const app = (
    // To "interpolate" JavaScript, use curly braces.
    <div id={idOfDiv}>
        <About tempScore={3} />

        <H1Generator text="Hi this is custom text!" />
        <H2Generator something="some text" />
        <H1Generator text="This is some other line!" />

        {title}
        {paragraph}
    </div>
);

// Render component to target element.
ReactDOM.render(
    app,
    document.getElementById("root")
);

//JSX syntax
// anything that is written in JSX should go in between a pair of parentheses.
// Any javascript inside JSX should be written between a pair of curly braces.
//EXAMPLE:
//let text = (<p>{someJSVariable}</p>);

let text2 = <p></p>;
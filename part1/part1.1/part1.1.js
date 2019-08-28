import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Header = (props) => {
    return (
        <p>this is the {props.course}</p>
    );
};

const Content = (props) => {
    return (
    <div>
        
        <p> {props.part1}</p>
        <p> {props.exercises1}</p>
        
        <p>{props.part2}></p>
        <p>{props.exercises2}></p>
        
        <p> {props.part3} </p>
        <p>{props.exercises3}</p>
    </div>
    );
};
const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.exercises}</p>
        </div>
    )
}

const Func = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <h1><Header course={course}></Header></h1>
        <p><Content part1 = {part1} exercises1 = {exercises1}></Content></p>
        <p><Content part2 = {part2} exercises2 = {exercises2}></Content></p>
        <p><Content part3 = {part3} exercises3 = {exercises3}></Content></p>
        <p><Total exercises = {exercises1 + exercises2 + exercises3}></Total></p> 
    
    </div>
  )
}

ReactDOM.render(<Func />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
//import logo from './logo.svg';
import { connect } from 'redux-zero/react';
import { Play , Stop , Next} from './actions';
import './App.css';

const PlayList = () => { 
  
  return ( 
  <div>
    <h1>Treetunes </h1>
    <button id="play" type='button' onClick = {
      e => Play()} > Play </button>
    <button id="next" type='button' onClick = {
      e => {
        Stop();
        Next()  
        }} > Next </button>
    <button id="stop" type='button'
     onClick = {
      e =>  Stop() } > Stop </button>
  </div> );
};

const Song = ({ title, artist , duration , state }) => (
  <li className={state}>{title}
    <span>{duration}</span>
  </li>  
);

const App = ({songs})=> {
   
    const list = songs.map( item => ( 
       <Song 
         key= {item.id}
         title = {item.title} 
         duration={item.duration}
         state ={item.state}
       /> 
       ));
    return (
      <div className="App">
        <PlayList/>
        <ol id="playlist">{list}</ol>
      </div>
    );
  }

const mapToProps = ({songs}) => ({songs});

export default connect( mapToProps)(App);

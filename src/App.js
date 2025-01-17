import logo from './logo.svg';
import './App.css';
import Means from './means';
import Pop from './pop';
import Names from './object';
import Names2 from './names2';
import PopExample from './popexample';
import {Shift,Push,Every,Some} from './manyComponents';
import {Object,Object1,Object2,Object3} from './props';
//import { Stringify1,Stringify } from './many';
import Button from './clickProps';
import StateHook from './hooks/usestate';
import Hooks from './hooks/useState1'
//import  UserEffect  from './hooks/useEffect';
import  DataEffect from './hooks/userEffect'
import { create } from '@mui/material/styles/createTransitions';
import { createColorScheme } from '@mui/material';
import { createContext } from 'react';
import { Context, UseContext } from './hooks/useContext';



export const MovieInfoContext=createContext();

export const storeContext=createContext(); 

function App() {
  const movie_info={
    title:"surya",
    rating:4.5,
    yearofRel:2020,
    hero:"surya",
    heroine:"tamanna",
    genre:"action"
  }



  const names=["swathi","shivani","siri"];

  const handleClick = ()=>
    alert("button Clicked!");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieInfoContext.Provider value={movie_info}>
          <UseContext/>
        </MovieInfoContext.Provider>

        <storeContext.Provider value={names}>
          <Context/>
        </storeContext.Provider>
        <DataEffect/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
        <li>React</li>
        <li>Node.js</li>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Means/>
        <Pop/>
        <Names/>
        <Names2/>
        <PopExample/>
        <Every/>
        <Some/>
        <Push/>
        <Shift/>
        
        <Object MovieInfo={movie_info}/>
        <Object1 MovieInfo={movie_info}/>
        <Object2 name="swathi"/>
        <Object3 MovieInfo={movie_info}/>
       
        <Button click={handleClick}/>
        <StateHook/>
        <Hooks/>
      

        
      </header>
    </div>
  );
}

export default App;

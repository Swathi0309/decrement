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
import StateHook from './usestate';
import Hooks from './useState1'


function App() {
  const movie_info={
    title:"surya",
    rating:4.5,
    yearofRel:2020,
    hero:"surya",
    heroine:"tamanna",
    genre:"action"
  }


  const name="swathi";

  const handleClick = ()=>
    alert("button Clicked!");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

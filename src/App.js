import logo from './logo.svg';
import './App.css';
// import Means from './means';
// import Pop from './pop';
// import Names from './object';
// import Names2 from './names2';
// import PopExample from './popexample';
// import {Shift,Push,Every,Some} from './manyComponents';
// import {Object,Object1,Object2,Object3} from './props';
// //////import { Stringify1,Stringify } from './many';
// import Button from './clickProps';
// import StateHook from './hooks/usestate';
// import Hooks from './hooks/useState1'
// ///////import  UserEffect  from './hooks/useEffect';
 import  DataEffect from './hooks/userEffect';
// import { create } from '@mui/material/styles/createTransitions';
// import { createColorScheme } from '@mui/material';
// import { createContext } from 'react';
// import { Context, UseContext } from './hooks/useContext';
// import UserProfileWithUseState from './ContextwithuseState';
// import CounterWithUseReducer from './contextwithusereducer.js';
// import  CounterWithPropsParent from'./contextwithpropsParent';
// import  CounterWithPropsChild from'./contextwithpropschild';
import { Routes,Route, useNavigate} from 'react-router-dom';
//import Education from './routing/Education.js';

// import Home from './routing/Home.js';
// import Profile from './routing/Profile.js';
// import Contact from './routing/Contact.js';
// import { Navigate } from 'react-router-dom';
// import Userinfo from './routing/Userinfo.js';
import Education from "./hooks/Routing/Education";
import Contact from "./hooks/Routing/Contact";
import Home from "./hooks/Routing/Home";
//import Names from "./hooks/Routing/Names";
import About from "./hooks/Routing/About";
import Classbased from './hooks/classbasedcomp/Classbased';
import UseCallbackHook from './hooks/useCallback';
import UseLayoutEffectHook from './hooks/useLayout';
import UseMemoHook from './hooks/usememo';
import UseREfHook from './hooks/useref';
import UseWindowWidth from './hooks/customHook';
//import Welcome from './hooks/classbasedcomp/Welcome';
//import DataEffect from './hooks/userEffect';




//export const MovieInfoContext=createContext();

//export const storeContext=createContext(); 

function App() {
  const navigate=useNavigate();
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
      
      <button onClick={()=>navigate('/home')} >Home</button>
      <button onClick={()=>navigate('/con')}>Contact</button>
      <button onClick={()=>navigate('/education')}>Education</button>
      <button onClick={()=>navigate('/about')}>About</button>
      <header className="App-header">
        <div>
        <Routes>
              <Route path="/home/:names" element={<Home/>} />
              <Route path="/con" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/education" element={<Education/>}/>
            {/* <Route path="/user/:age" element={<Names/>}/>  */}
            </Routes>
        </div>
        <DataEffect/>
        <UseCallbackHook/>
        <UseLayoutEffectHook/>
        <UseMemoHook/>
        <UseREfHook/>
        <UseReducerHooks/>
        <UseWindowWidth/>
        {/* <DataEffect/>
        <Welcome/> */}
        {/* <Home/>
        <Contact/>
        <Education/>
        <Profile/> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        <UserProfileWithUseState/>
        <CounterWithUseReducer/>
        < CounterWithPropsParent/>
        <CounterWithPropsChild/>
        
        <Object MovieInfo={movie_info}/>
        <Object1 MovieInfo={movie_info}/>
        <Object2 name="swathi"/>
        <Object3 MovieInfo={movie_info}/>
       
        <Button click={handleClick}/>
        <StateHook/>
        <Hooks/>
       */}

        
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBored from './components/MainBored';
import unsplash from './api/unsplash';
import { useState,useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import PinterestIcon from '@mui/icons-material/Pinterest';
import styled from 'styled-components';
import {Route,Routes, BrowserRouter as Router} from 'react-router-dom';
import Create from './components/Create';
const LoadWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
width: 100%;
background-color: white;
.MuiSvgIcon-root{
  color: #e60023;
  font-size: 320px;
  cursor: pointer;
  padding: 16px;
 }
  .MuiLinearProgress-root{
    width: 50%;
    height: 10px;
    margin-top: 20px;
    background-color: #e60023;
    color: #e60023;
  }
  .bounce {
    animation: bounce 6.5s;
    animation-iteration-count: infinite;
  }
  
  @keyframes bounce {
    0%,
    25%,
    50%,
    75%,
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
      
    }
    40% {
      transform: translateY(-240px);
    }
    60% {
      transform: translateY(-160px);
      
    }
  } 
`
const Countwrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: darkgray;
font-size: 34px;
font-weight: 700;
position: absolute;
height: 48px;
left: 62px;
top: 19.6vh;
&:hover {
  background-color: black;
        color: white;
}
@media (max-height: 650px) {
  top: 24vh;
}
@media (max-width: 480px) {
      font-size: 24px;
      
@media (max-height: 900px) {
  top: 18.5vh;
}  
`
function App() {
  const [counter, setCounter] = useState(0);
  const CountHandler = () => {
    setCounter(counter + 1);
  }  
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(true), 6000)
  }, [])
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const [pins, SetPins] = useState([]);
  const GetImages = (term) => {
    return unsplash.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
    });
  }
  const OnSearchSubmit = (term) => {
    console.log(term);
    GetImages(term).then((response) => {
      let results = response.data.results;
      let newPins = [...results, ...pins];

      newPins.sort(function (a,b){
        return 0.5 - Math.random();
      });
      SetPins(newPins);
    });
  }
  const getNewPins = () => 
  {
    let promises = [];
    let pindata = [];
    let pins = ['ocean','Tokyo','dogs','cats','birds','cars','bikes','flowers','food','fashion','architecture','interiors'];
    pins.forEach((pinTerm) => {
      promises.push(GetImages(pinTerm).then((response) => {
        let res = response.data.results;
        pindata = pindata.concat(res);
        pindata.sort(function (a,b)
        {
          return 0.5 - Math.random();
        });
      })
    );
    });
    Promise.all(promises).then(() => {
      SetPins(pindata);
    });
  }
 useEffect(() => {
  getNewPins();
 }, []);
  return (
    <>
    {loading === false ? 
      ( <>
        <LoadWrapper>
        <PinterestIcon className='bounce'/>
        <LinearProgress variant="determinate" value={progress} />
        </LoadWrapper>
        </>
      ) : (
     <> 
     <Header OnSubmit={OnSearchSubmit}/>
     <Countwrapper>
     {counter}
     </Countwrapper>
      <Router>
        <Routes>
        <Route path="/" element={<MainBored pins={pins} CountHandler={CountHandler} />}/>  
        <Route path='/Create' element={<Create/>}/>
        </Routes>
      </Router> 
     </>
    )} 
   </>
    
  );
}

export default App;

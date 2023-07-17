
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
const Wrapper = styled.div`
padding: 8px;
`

const Container = styled.div`
 overflow: hidden;
 position: relative;

 img {
        width: 100%;
        cursor: pointer;
        border-radius: 16px;
        object-fit: cover;
 }
 img:hover {
         transform: scale(1.05);
         transition: transform 0.5s;
         opacity: 0.8;
         

 }
  &:hover .content {
      
      bottom: 0;
      transition: bottom 0.5s ease;
  }       
  .content {
     width: 100%;
     height: 50px;
     position: absolute;
     margin: auto;
     backdrop-filter: blur(5px);
     color: black;
     bottom: -55px;
    text-align: center;
  }
  button
  {
    width: 15%;
    height: 5%;
    background-color: #e60023;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    position: absolute;
    top: 5%;
    right: -85px;
    border-radius: 24px;
  }
  &:hover button {
    left: 80%;
    transition: left 0.5s ease;
  }
  .Link {
    margin-left: 10px; 
    width: 40%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 16px;
    cursor: pointer;
    color: black;
  }
  .Link a
  {
    text-decoration: none;
  }
`
function Pin({urls, countHandler}) {
  const [check, setCheck] = useState(true);
  return (
      <Wrapper>
        <Container>
          <img alt='pin'  src= {urls?.regular} >
          </img>
          <div className='content'>
            <div className='Link'>
            <h4><a href='https://unsplash.com/'>{urls?.regular.substring(0,27)}</a></h4>
            </div>
           
          </div>
            {check ? <button onClick={() => {countHandler(); setCheck(!check);}} onclick>Favourite</button> : null}   
        </Container>
      </Wrapper>
  )
}

export default Pin

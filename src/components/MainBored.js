import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'
const Wrapper = styled.div`
background-color: white;
display: flex;
justify-content: center;
height: 100vh;
margin-top: 20px;
margin-left: 80px;
`

const Container = styled.div`
background-color: white;
column-count: 3;
column-width: 33%;
padding: 0 12px;

@media (max-width: 991px) {
  background-color: white;
 column-count: 2;
 coulmn-width: 50%;
}
@media (max-width: 760px) {
  background-color: white;
  column-count: 1;
  column-width: 100%;
 }
`
function MainBored({pins,CountHandler}) {
    const countHandler = () => {
        CountHandler();
    }   
  return (
    <Wrapper>
    <Container>
        
        { pins.map((pin,index) => {
            let {urls} = pin;
            return <Pin key={index} urls={urls} countHandler={countHandler}/>
        })}
    </Container>
  </Wrapper>
  )
}

export default MainBored

import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'
const Wrapper = styled.div`
background-color: white;
columns: 3;
column-gap: 40px;
gap: 20px;
// justify-content: center;
// height: 100vh;
margin-top: 20px;
margin-left: 100px;
`

const Container = styled.div`
// background-color: white;
display: flex;
flex-direction: column;

padding: 0 10px;

@media (max-width: 991px) {
  background-color: white;
 columns: 2;
}
@media (max-width: 760px) {
  background-color: white;
  columns: 1;
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

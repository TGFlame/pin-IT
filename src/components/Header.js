import React from 'react'
import styled from 'styled-components'
import PinterestIcon from '@mui/icons-material/Pinterest';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState,useContext } from 'react';
import { counterContext } from '../App';
const LogoWrapper = styled.div`
.MuiSvgIcon-root{
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
    padding: 16px;
}`
const Wrapper = styled.div`
display: flex;
align-items: center;
height: 56px;
padding: 12px 4px 4px 16px;
color: black;`

const HomeButtons = styled.div`
display: flex;
align-items: center;
height: 48px;
min-width: 80px;
justify-content: center;
border-radius: 24px;
cursor: pointer;
font-size: 16px;
`
const HomeWrapper = styled(HomeButtons)`

background-color: white;
 a {
        text-decoration: none;
        color: rgb(17, 17, 17);
        font-weight: 700;
 } 
`
const ExploreWrapper = styled(HomeButtons)`

padding: 0 16px;
background-color: white;
:hover
 {
        background-color: #e1e1e1;
 }
 a {
        text-decoration: none;
        color: rgb(17, 17, 17);
        font-weight: 700;
 } 
 
`
const CreateWrapper = styled(HomeButtons)`
:hover
 {
        background-color: #e1e1e1;
 } 
background-color: white;
 a {
        text-decoration: none;
        color: rgb(17, 17, 17);
        font-weight: 700;
 }
 
`
const SearchWrapper = styled.div`
flex: 1;

`
const SearchbarWrapper = styled.div`
 display: flex; 
 background-color: #efefef;
 border-radius: 50px;
 height: 48px;
 width: 100%;
 border: none;
 padding-left: 10px;
  form {
   flex: 1;
   display:flex; 
}
    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }
    form > button {
        display: none;
    }
    input:focus{
        outline: none;
    }
    
    `
  const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  position: absolute;
  left: 0;
  top: 10vh;
  .MuiSvgIcon-root{
    color: 313233;
    font-size: 32px;
    cursor: pointer;
    padding: 0 10px;
    flex: 1;
   }
    .MuiSvgIcon-root:hover{
        background-color: black;
        color: white;
        border-radius: 25%;
        transition: 0.3s
    }  
    @media (max-width: 480px) {
        .MuiSvgIcon-root{
            font-size: 24px;
            padding: 0 5px;
            float: none;
            display: block;
        }
  `    
function Header(props) {
    const [input, setInput] = useState("");
    const OnclickSubmit = (e) => {
        e.preventDefault();
        props.OnSubmit(input);
    }
    const counter = useContext(counterContext);
  return (
    <>
      <Wrapper>
        <LogoWrapper>
            <IconButton>
            <PinterestIcon/>
            </IconButton>
         
        </LogoWrapper>
        <HomeWrapper>
            <a href="/">Home</a>
        </HomeWrapper>   
        <ExploreWrapper>
         <a href="/">Explore</a> 
        </ExploreWrapper>    
        <CreateWrapper>
           <a href="/create">Create</a> 
        </CreateWrapper>
        <SearchWrapper>
         <SearchbarWrapper>
            <IconButton>
            <SearchIcon/>
            </IconButton>
            <form>
                <input type="text" placeholder='Search' onChange={(e) => setInput(e.target.value)}/>
                <button type="submit" onClick={OnclickSubmit}></button>
            </form>
         </SearchbarWrapper>      
        </SearchWrapper>
       
                   
    </Wrapper>
    <IconsWrapper>
       <IconButton>
            <NotificationsIcon/>
       </IconButton>
       <IconButton>
            <TextsmsIcon/>
       </IconButton>
       <IconButton>
            <FavoriteIcon/>
            {counter} 
       </IconButton>
       <IconButton>
             <KeyboardArrowDownIcon/>
       </IconButton>
   </IconsWrapper>
   </>
  )
};
export default Header

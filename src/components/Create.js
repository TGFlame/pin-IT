import React from 'react'
import styled from 'styled-components'
import ImageIcon from '@mui/icons-material/Image';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const BackgroundWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 100vh;
    width: 100%;`
const AddIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 72px;
    height: 92px;
    padding: 16px;
    background-color: #efefef;
    button 
    {
        width: 40px;
        height: 60px;
        background-color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }`
const ImageIconWrapper = styled.div`
    cursor: pointer;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 40px;
    background-color: lightgray;
    padding: 10px;
    `
const IconWrapper = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: 5%;
    height: auto;
    `
const CreateWrapper = styled.div`
    margin-top: 20px;
    margin-left: 20%;
    margin-top: 2.5%;
    width: 50%;
    height: 70%;
    border-radius: 24px;
    background-color: white;
   
    .Top {
        
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 20%;
        padding: 10px;
        top: 0;
        button 
        { 
            margin-top: 20px;
            margin-right: 50px;
            width: 10%;
            height: 40px;
            background-color: #e60023;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: 700;
            position: relative;
            top: 5%;
        }
    }
    .flex-container {
        display: flex;
        height: 100%;
    }
    
    .fixed {
        width: 400px;
        height: 100%;
        display: flex;
        flex-direction: column;
        
    }
    .imgArea
    {
        width: 80%;
        background-color: #efefef;
        height: 440px;
        margin-left: 10%;
        
    }  
    .content
    {
        height: 100%;
    }
    .flex-child {
        flex-grow: 1;
    } 
    

    .flex-child .title
    {
        width: 80%;
        height: 10%;
        padding: 10px;
        outline: none;
        border: none;
        font-size: 35px;
        border-bottom: 1px solid lightgray;
        margin-bottom: 30px;
        font-weight: 700;
        
    }
    .flex-child .title:focus
    {
        border-bottom: 1px solid #e60023;
    }
    .flex-child .desc
    {
        font-size: 12px;
    }
    .flex-child .desc, .alt-desc 
    {
        width: 80%;
        height: 5%;
        padding: 10px;
        outline: none;
        border: none;
        border-bottom: 1px solid lightgray;
    }
    .flex-child .desc:focus
    {
        border-bottom: 1px solid #e60023;
    }
    }
    .outline
    {
        cursor: pointer;
        width: 80%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 15px;
        font-weight: 700;
        border: 1px dashed lightgray;
        margin-left: 10%;
        margin-top: 10%;
    }
    label
    {
        cursor: pointer;
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bg
    {
        height: 30px;
        width: 30px;
        background-color: lightgray;
        border-radius: 50%;
        margin-top: 80px;
        padding: 10px;
    }
    .save
    {
        width: 80%;
        height: 5%;
        margin-left: 10%;
    }
    .save, alt-save
    {
        
        background-color: #efefef;
        border: none;
        outline: none;
        cursor: pointer;
        color: black;
        margin-top: 5%;
        border-radius: 24px;
        font-size: 16px;
        font-weight: 700;
        
    }
    .alt-save
    {
        width: 20%;
        height: 5%;
        
    }
    .alt-desc
    {
        margin-top: 25%;
        font-size: 16px;
    }    
    }
   
    `
    
function Create() {
    
  return (
    <BackgroundWrapper>
    <IconWrapper>    
    <AddIconWrapper>
        <button><AddIcon/></button>
    </AddIconWrapper>
    <ImageIconWrapper>
        <ImageIcon/>
    </ImageIconWrapper>
    </IconWrapper>
    <CreateWrapper>
        
            <div className='content'>
            <div className="Top">
            <button>Save</button>
            </div>
            <div className="flex-container">
            <div className='fixed'>
            <div className='imgArea'>
             <div className='outline'>
             <div className='bg'>    
             <KeyboardArrowUpIcon/>
             </div>
            <input type='file' accept='image/*' multiple='false' id='file' style={{display: 'none'}}  />
            <label for='file'>Drag and drop or click to upload</label>
            </div>
            
            </div>
            <button className='save'>Save from site</button>
            </div>    
            <div className="flex-child">
            <input className='title' type="textarea" placeholder="Add your title"/>
            <input className='desc' type="textarea" placeholder="Tell others what your pin is about"/>
            <button className='alt-save'>Add alt text</button>
            <input className='alt-desc' type="textarea" placeholder="Add a destination link"/>
            </div>
            
            </div>
            </div>         
    </CreateWrapper>    
    </BackgroundWrapper>
  )
}

export default Create

import styled from 'styled-components'
import {FaMagento} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const Wrapper = styled.div`
  display:  flex;
  background:#FBFCFC;
  padding-bottom: 50px;

  @media screen and (max-width:768px){
   display: flex;
   flex-direction: column;
   padding-bottom: 0px;
  }
`



export const Container = styled.div`
 padding: 20px 80px;
 width: 100%;
 height: 400px;
`
export const TopLine = styled.h5`
 font-weight:bold;
 color: #273746;
 font-size: 18px;
 padding: 10px 0;
`

export const Heading  = styled.h2`
  font-weight: bold;
  color: #273746;
  font-size: 30px;
 
`

export const Description  = styled.p`
  font-weight: bold;
  color: #273746;
  padding-top: 20px;
`
export const Btn = styled.button`
  padding: 10px 20px;
  width: 200px;
  margin-top: 10px;
  background: #3498DB;
  border-radius: 4px;
  border:none;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  margin-top: 50px;
  @media screen and (max-width:768px){
  width: 100%;
  }
  
`
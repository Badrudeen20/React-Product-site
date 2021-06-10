import styled from 'styled-components'
import {FaMagento} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const Footers = styled.div`
 width: 100%;
 background-color: #1B2631;
 padding: 50px;
`
export const TopLine = styled.h3`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`

export const Subcribe = styled.div`
 padding: 30px;
   display: flex;
    flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:768px){
   
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
`
export const InputEmail = styled.input`
  padding: 10px;
  border: none;
 border-radius: 3px;
 @media screen and (max-width:768px){
    width: 250px;
  }
`

export const Btn = styled.button`
   padding: 10px 30px 10px 30px;
   border: none;
   color: #fff;
   background: #EC7063;
   font-weight: bold;
   margin-left: 10px;
   border-radius: 5px;
   @media screen and (max-width:768px){
    width: 250px;
    margin-top: 10px;
    margin-left: 0px;
  }
`

export const FooterDetail = styled.div`
  margin:10px 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media screen and (max-width:768px){
    display: grid;
  grid-template-columns: auto auto;
  }
`
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-top: 10px;
`
export const Heading = styled.h2`
 color: #fff;
`
export const Ptag = styled.p`
 color: #fff;
 font-size: 13px;
 padding: 2px 0;
 font-weight: bold;
`
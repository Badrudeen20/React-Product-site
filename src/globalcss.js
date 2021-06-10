import styled, {createGlobalStyle} from 'styled-components'


 const GlobalStyle  = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
}
`
export const Container = styled.div`
z-index: 1;
width:100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-left: 50px;
padding-right: 50px;
@media screen and (min-width:900px){
       padding-left: 30px;
       padding-right: 30px;
    }
`

export default GlobalStyle


import "modern-normalize";
import { createGlobalStyle } from "styled-components";
import ShadowsIntoLight from "../assets/fonts/ShadowsIntoLight-Regular.ttf";
import backgroundImage from "../assets/1674742230_bogatyr-club-p-fon-dlya-saita-fon-74.jpg";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'ShadowsIntoLight';
  src: url(${ShadowsIntoLight}) format('woff');
  font-style: normal;
  font-weight: 700;
  
}


body{
  background-image: url(${backgroundImage});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center ;
  color:black;
  height:100%;
font-family: 'ShadowsIntoLight';
}


a{
    text-decoration:none
}
ul,ol{
    margin: 0;
    padding:0;
    list-style: none;
}



h1,h2,h3,p{
margin:0;
}


img{
    display: block;
    max-width: 100%;
    height: auto;
}
button{
    display:block;
    cursor: pointer;
    border:none;
    padding:0;
    margin: 0;
    color:inherit;
    font:inherit;
    background-color: transparent;
}

`;
export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

html {
    font-size: 100%;
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    font-family:  'Poppins', sans-serif;
    font-size: 0.8125rem;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    min-height: 100vh;
    
  }
  
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
      padding: 0;
  }
  
  
  a {
    text-decoration: none;
  }
  
  p {
    margin: 0;
    padding: 0;
  }
  img {
  display:block;
  width:100%;
  }
 ul{
  list-style: none;
  padding: 0;
  margin: 0;
 }
  
`;

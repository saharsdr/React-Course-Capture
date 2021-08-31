import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


/* Base */
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; //1rem = 10px

  }

  body {
    box-sizing: border-box;
    
  }

  /* Typography */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

  /* font-family: 'Lobster', cursive; */

body {
  font-family: 'Roboto', sans-serif;
  color: white;
}

h2 {
  font-weight : lighter;
  font-size: 4rem;
  text-transform : uppercase
}
h3 {
  color: white;
}
h4{
  font-weight:bold;
  font-size : 2.5rem;
}
a {
  text-decoration: none;
  font-size: 1.7rem;
}

p {
  padding: 3rem 0;;
  color : #ccc;
  font-size: 2rem;
  line-height: 150%;
}

.text--green-light{
  font-weight: bold;
  color: #23d997;
}

body {
    background-color: #1b1b1b;
  }




`;

export default GlobalStyle;

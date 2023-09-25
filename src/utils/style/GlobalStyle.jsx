import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat','Trebuchet MS', Helvetica, sans-serif;
      margin: 0;
     padding: 0;
     box-sizing: border-box;
    }

    header, main{
        max-width:1240px;
        min-width: 375px;
        margin-inline:auto;
        width:90%;
    }

`

function GlobalStyle() {
     return <StyledGlobalStyle />
}

export default GlobalStyle

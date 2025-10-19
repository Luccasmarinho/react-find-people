import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        list-style: none;
        font-family: "Poppins", sans-serif;
    }

    :root {
        --background: #171717;
        --text: #f1f1f1;
        --primary: #811ac0;
        --grey: #414141;
        --grey2: #717171;
    }

    body {
        min-height: 100vh;
        background-color: var(--background);
    }
`;

export default GlobalStyle;

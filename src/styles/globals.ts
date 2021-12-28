import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #f0f2f5;
        --shape: #ffffff;

        --red: #E62E4D;
        --blue: #5429CC;
        --blue-light: #6933ff;

        --text-title:#363f5f;
        --text-body: #969cb3

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1080px){
            font-size: 98.75%;
        }

        @media(max-width: 720px){
            font-size: 87.50%;
        }
    }



    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }


`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #f0f2f5;
        --shape: #ffffff;
        --green: #33cc95;
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

    button{
      cursor: pointer;
    }

    [disabled]{
      opacity: 0.6;
      cursor: not-allowed;
    }

    .react-modal-overlay{
      background: rgb(0,0,0,0.5);
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      display: flex;
    }
    .react-modal-content{

      background: var(--background);
      width: 100%;
      max-width: 576px;

      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;

    }

    .react-modal-button-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    border: 0;
    background: transparent;

    transition: filter 0.3s;

    &:hover{
      filter: brightness(0.5);
    }

  }


`;

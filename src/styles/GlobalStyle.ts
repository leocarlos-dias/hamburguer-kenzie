import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;

        box-sizing: border-box;

        font-family: 'Inter', sans-serif;
    }

    body {
        min-height: 100vh;
        background-color: #FFFFFF;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    #root {
        --color-primary: ${props => props.theme.colors.colorPrimary};
        --color-primary-50: ${props => props.theme.colors.colorPrimary50};
        --color-secondary: ${props => props.theme.colors.colorSecondary};
        --color-background: ${props => props.theme.colors.colorBackground};

        --gray-600: ${props => props.theme.colors.gray600};
        --gray-400: ${props => props.theme.colors.gray400};
        --gray-300: ${props => props.theme.colors.gray300};
        --gray-100: ${props => props.theme.colors.gray100};
        --gray-75: ${props => props.theme.colors.gray75};
        --gray-50: ${props => props.theme.colors.gray50};
        --gray-25: ${props => props.theme.colors.gray25};
        --gray-0: ${props => props.theme.colors.gray0};

        --negative: ${props => props.theme.colors.negative};
        --warning: ${props => props.theme.colors.warning};
        --sucess: ${props => props.theme.colors.sucess};
        --information: ${props => props.theme.colors.information};

        --toastify-icon-color-info: ${props => props.theme.colors.information};
        --toastify-icon-color-success: ${props => props.theme.colors.sucess};
        --toastify-icon-color-warning: ${props => props.theme.colors.warning};
        --toastify-icon-color-error: ${props => props.theme.colors.negative};

        --toastify-color-light: #fff;
        --toastify-color-dark: #121212;
        --toastify-color-info: ${props => props.theme.colors.information};
        --toastify-color-success: ${props => props.theme.colors.sucess};
        --toastify-color-warning: ${props => props.theme.colors.warning};
        --toastify-color-error: ${props => props.theme.colors.negative};
    }

    *::-webkit-scrollbar {
        width: 10px;
    }

    *::-webkit-scrollbar-track {
            background: ${props => props.theme.colors.colorBackground};
        }

    *::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.colorPrimary};
        border-radius: 5px;
        border: 3px solid ${props => props.theme.colors.colorBackground};
    }

`
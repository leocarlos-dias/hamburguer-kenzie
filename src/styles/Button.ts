import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const modifierButton: any = {
    primary: () => css`
            color: #FFFFFF;
            background-color: var(--color-primary);
            border: 2px solid var(--color-primary);
 
        :hover{
            background-color: var(--color-primary-50);
            border: 2px solid var(--color-primary-50);
        }
      `,

    gray: () => css`
            color: var(--gray-300);
            background-color: var(--gray-100);
            border: 2px solid var(--gray-100);

        :hover{
            color: var(--gray-100);
            background-color: var(--gray-300);
            border: 2px solid var(--gray-300);
        }
      `,

    small: () => css`
            height: 40px;
        `
}

interface IButton {
    color: string;
    size?: string;
}

export const Button = styled.button <IButton>`
    width: 100%;
    height: 60px;
    
    border-radius: 8px;
    padding: 0 20px;
    
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    cursor: pointer;

     ${(props) => css`
        ${!!props.color && modifierButton[props.color]()}
    `};

    ${(props) => css`
        ${!!props.size && modifierButton[props.size]()}
    `};
`

export const StyledLink = styled(Link) <IButton>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 60px;
    
    border-radius: 8px;
    padding: 0 20px;
    
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    cursor: pointer;

     ${(props) => css`
        ${!!props.color && modifierButton[props.color]()}
    `};

    ${(props) => css`
        ${!!props.size && modifierButton[props.size]()}
    `};
`


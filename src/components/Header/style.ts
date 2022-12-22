import styled from "styled-components";
import { Wrapper } from "../../styles/Wrapper";

export const Container = styled.header`
    width: 100%;
    height: 80px;

    background-color: var(--gray-100);

    position: fixed;
    top: 0;

    z-index: 2;
`

export const StyledWrapper = styled(Wrapper)`
    width: 100%;
    height: 100%;
    
    display: flex;
    
    align-items: center;
    justify-content: space-between;

    padding: 0 15px;

    & button:active {
        transform: translateY(1px);
    }

    & > div:first-child {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        gap: 5px;
                
        width: 160px;

        & > img {
            width: 100%;
        }

        & > div {
            width: 80%;

            display: flex;

            align-items: center;
            justify-content: center;

            gap: 10px;

            & > svg {
                height: 50%;
                width: 50%;

                fill: var(--gray-300);
            }
        }
    }

    & > div:last-child {
        flex: 1;

        display: flex;

        align-items: center;
        justify-content: flex-end;

        gap: 10px;

        & > button {
            border: none;
            outline: none;

            background-color: var(--gray-100);

            &:hover svg{
                fill: var(--color-primary);
            }

            & svg {
                height: 40px;
                width: 32px;

                padding: 2px;

                fill: var(--gray-400);
            }
        }        
    }
`

export const InputWrapper = styled.form`
    position: absolute;

    height: 70%; 

    right: 90px;
    bottom: 15px;

    display: flex;
    
    align-items: center;
    
    border: 1px solid transparent;
    border-radius: 8px;
    
    background-color: transparent;

    padding: 0 5px;
    gap: 5px;
    
    transition: all 0.2s ease;

    z-index: 1;

    @media (min-width: 570px) {
        position: static;

        width: 290px;
        
        background: var(--color-background)
    }

    & > button {
        background: transparent;

        height: 30px;
        width: 30px;
        
        border: none;
        outline: none;
            
        & > svg {
            
            height: 30px;
            width: 30px;
            
            border-radius: 8px;
            
            background-color: transparent;
            fill: var(--gray-400);

            cursor: pointer;

            @media (min-width: 570px) {
                background-color: var(--color-primary);
                fill: #FFFFFF;
            }
        }
    }

    & > input {
        display: none;

        height: 45px;
        width: 100%;
        
        border: none;
        border-radius: 8px;
        
        outline: none;
        
        padding-left: 5px;
        
        background-color: transparent;

        @media(min-width: 570px) {
            display: flex;
            opacity: 1; 
        }
    }   

    &:hover {
        right: 3%;
        width: 94%;
        
        background: #FFFFFF;
        border: 1px solid var(--gray-600);
        
        @media( min-width: 380px) {
            right: 2%;
            width: 96%;
        }

        @media(min-width: 570px) {
            right: 83px;
            width: 290px;
        }
    }
    
    &:hover svg {
        background-color: var(--color-primary);
        fill: #FFFFFF;
    }
    
    &:hover input {
        display: flex;

        opacity: 1;      
    }

`

export const CountWrapper = styled.button`
    position: relative;

    & > div {
        position: absolute;

        bottom: 60%;
        right: -20%;

        padding: 4px 6px;

        background-color: var(--color-primary);

        border-radius: 7px;

    }
`


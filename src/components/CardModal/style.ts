import styled from "styled-components";

export const Container = styled.li`
    width: 100%;
    height: 100%;

    display: flex;

    align-items: flex-start;
    justify-content: flex-start;

    gap: 5px;
    padding: 5px 0;

    @media(min-width: 500px) {
        gap: 20px;
    }

    & > img {
        height: 80px;
        width: 80px;

        background-color: var(--gray-100);

        border-radius: 5px;
    }

    & > div {
            flex: 1;
            height: 80px;

            display: flex;
            flex-direction: column;
            
            align-items: flex-start;
            justify-content: space-between;
            word-break: break-all
    } 
`

export const StyledIoMdTrash = styled.button`
    height: 100%;

    outline: none;
    border: none;

    background-color: transparent;

    width: 30px;

    
    & > svg {
        fill: var(--gray-400);
        
        width: 100%;
        height: 100%;
    }
    
    &:hover svg {
        fill: var(--gray-600);
    }
`

export const ButtonsWrapper = styled.div`

    background-color: var(--gray-75);
    
    border-radius: 4px;

    & > button {
        padding: 5px 10px;

        outline: none;
        border: none;
        border-radius: 4px;

        background-color: transparent;

        & > svg {
            fill: var(--color-secondary);
        }

        &:hover{
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            
            &:active{
            transform: translateY(1px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        }
    }

    & > span {
        display: inline-block;

        min-width: 40px;

        background-color: var(--color-background);
        padding: 2px 15px;
    }
`
import styled from "styled-components";

export const Container = styled.li`
    min-width: 240px;
    min-height: 350px;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    background-color: var(--color-background);
    
    border: 2px solid var(--gray-100);
    border-radius: 5px;

    &:hover{
        border: 2px solid var(--color-primary);
    }

    & > div:first-child {
        width: 100%;
        height: 150px;

        display: flex;

        align-items: center;
        justify-content: center;

        background-color: var(--gray-100);

        & > img {
            width: 180px;
            height: 100%;

            object-fit: cover;
        }
    }

    & > div:last-child {
        flex: 1;

        width: 100%;

        display: flex;
        flex-direction: column;

        align-items: flex-start;
        justify-content: space-between;

        padding: 20px;

        & button:active {
            transform: translateY(1px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
    }
`
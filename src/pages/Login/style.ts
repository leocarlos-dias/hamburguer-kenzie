import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 15px;
    gap: 15px;

    background-color: var(--color-background);

    @media(min-width: 768px) {
        flex-direction: row-reverse;
        
        gap: 60px;
    }

    img {
        width: 100%;
        max-width: 240px;
    }
`
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    gap: 15px;

    @media(min-width: 768px) {
        gap: 30px;
    }
    
    & > img {
        display: none;
        width: 180px;

        @media(min-width: 768px) {
            display: block;
        }
    }

    & > div:first-child {
        border: none;
        padding: 0;

    }

    & > div {
        width: 100%;
        max-width: 500px;

        display: flex;

        align-items: center;
        justify-content: flex-start;

        gap: 15px 20px;
        padding: 15px;

        background-color: var(--color-background);

        border: 1px solid var(--gray-100);
        box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;

        & > figure {
        width: 60px;
        height: 60px;

        background-color: rgba(39, 174, 96, 0.1);
        border-radius: 5px;

        display: flex;

        align-items: center;
        justify-content: center;
        
        & > img {
            width: 60px;
            height: 24px;
        }
    }

}
`
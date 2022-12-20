import styled from "styled-components";
import { Wrapper } from "../../styles/Wrapper";
import { blink } from "../../styles/Animation";

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    background-color: var(--color-background);
`

export const StyledWrapper = styled(Wrapper)`
  
  padding: 0 15px;

  & > div {
        width: 100%;

        margin: 0 auto;

        padding: 15px 0 0 15px;

        @media (min-width: 555px) {
            padding: 15px 0;
        }
    }
`

export const StyledList = styled.ul`
    display: flex;
    flex-direction: row;

    align-items: flex - start;
    justify-content: flex - start;

    gap: 10px;
    padding: 30px 0;

    overflow-x: scroll;

    @media (min-width: 570px) {
        display: grid;

        grid-template-columns:repeat(auto-fill, minmax(260px, auto));

        overflow-x: visible; 
    }
`

export const EmptyList = styled.div`
        min-width: 240px;
        min-height: 350px;

        display: flex;
        flex-direction: column;

        align-items: flex-start;
        justify-content: flex-start;

        background-color: var(--gray-100);

        border-radius: 5px;

        animation: ${blink} 2.2s infinite;
`
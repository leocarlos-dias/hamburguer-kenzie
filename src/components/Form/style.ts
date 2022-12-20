import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../../styles/Wrapper";

export const Container = styled.form`
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    background: var(--color-background);
`

export const StyledWrapper = styled(Wrapper)`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    gap: 20px;
    padding: 40px 20px;

    border: 2px solid #F5F5F5;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    & > div {
        width: 100%;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-between;
    }

    & > fieldset {
        width: 100%;
        
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: flex-start;

        gap: 20px;

        border: none;
    }
`

export const StyledLinkDecoration = styled(Link)`
    color: var(--gray-300);

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    text-decoration: underline var(--gray-300);
`
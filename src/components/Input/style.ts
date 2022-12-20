import styled from "styled-components";

export const WrapperInput = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;

    gap: 10px;

    border-radius: 8px;

    background-color: var(--color-background);
    
    & > input {
            width: 100%;
            height: 60px;

            background-color: var(--gray-0);
            border: none;
            
            border-radius: 8px;

            padding: 0 15px;

            &:focus {
                background-color: var(--color-background);
                outline-color: var(--gray-600);
                border-radius: 8px;
            }
        }
`
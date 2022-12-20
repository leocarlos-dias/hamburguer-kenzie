import styled from "styled-components";


export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    
    background-color: rgba(0,0,0,0.7);

    display: flex;
    
    align-items: center;
    justify-content: center;

    padding: 15px;

    z-index: 2;
`

export const HeaderModal = styled.div`
    width: 100%;
    height: 50px;
    
    background-color: var(--color-primary);

    display: flex;

    align-items: center;
    justify-content: space-between;

    padding: 0 20px;

    border-radius: 5px 5px 0px 0px;

    & > button {
        width: 25px;
        height: 100%;

        background-color: transparent;

        border: none;
        outline: none;

        &:active {
            transform: translateY(1px);
        }

        & > svg {
            height: 100%;
            width: 100%;

            fill: #FFFFFF;
        }

    &:hover svg {
        fill: var(--gray-600)
    }
    }
`

export const ModalWrapper = styled.div`    
    min-height: 150px;
    
    width: 100%;
    max-width: 500px;

    background-color: var(--color-background);

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    border-radius: 5px;

    & hr {
        width: 100%;
        
        border: 1px solid var(--gray-100);
        color: var(--gray-100);

        margin-top: 25px;
    }
`

export const MainModal = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    padding: 20px;
`

export const TopSide = styled.div`
    width: 100%;
    height: 100%;
    max-height: 350px;

    overflow-y: scroll;
`

export const StyledListModal = styled.ul`
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        align-items: flex-start;
        justify-content: flex-start;

        gap: 20px;
`

export const BottomSide = styled.div`
    width: 100%;

    & > button:active {
        transform: translateY(1px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    & > div {
        display: flex;

        align-items: center;
        justify-content: space-between;

        padding: 20px 0;
    }
`

export const EmptyCart = styled.div`
    width: 100%;
    text-align: center;

    & > h3 {
        line-height: 2;
    }
`
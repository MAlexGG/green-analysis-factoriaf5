import styled from "styled-components";

export const CtButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.background};
    color: ${props => props.color};
    border: none;
    padding: 13px 40px;
    border-radius: 4px;
    box-shadow: inset 0px 1px 0px #fff,0px 5px 0px rgba(255,255,255,0),1px 7px 7px 3px rgba(0,0,0,0.3);
    font-size: 1.2rem;
    font-weight: var(--font-regular);
    font-family: var(--font-main);
    &:hover{
        color: ${props => props.hColor};
        background-color: ${props => props.hBackground};
    }

`;
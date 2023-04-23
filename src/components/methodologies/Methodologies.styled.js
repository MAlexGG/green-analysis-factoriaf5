import styled from "styled-components";

export const CtMethodologies = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3% 1.5%;
    box-sizing: border-box;
`;

export const CtMethodology = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
    width: 86%;
    height: 80%;
    background-color: var(--color-main);
    color: white;
    padding: 3%;
    box-shadow: 0px 5px 10px 0px var(--color-dark);
    transition: all .3s ease-in-out;
    &:hover{
        transform: scale(1.03);
    }
`;

export const ImgIcon = styled.img `
    width: auto;
    height: 50px;
    filter: invert(100%);
`;

export const TxtTitle = styled.h4 `
    font-family: var(--font-main);
    font-size: 2rem;
    margin: 3%;
`;

export const Txt = styled.p `
    font-family: var(--font-main-light);
    font-size: 1rem;
`;

export const Video = styled.iframe`
    width: 800px;
    height: 450px;
    margin-bottom: 3%;
    border: none;
`;

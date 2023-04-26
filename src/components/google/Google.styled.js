import styled from "styled-components";
import google from '../../assets/ex-coders/gen-z-4-2.webp';

export const CtGoogle = styled.div `

    background-image: url(${google});
    background-size: cover;
    color: white;
    width: 100%;
    background-repeat: no-repeat;
    height: 550px;
    background-position: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1.5%;
    box-sizing: border-box;
`;

export const CtFemCoders = styled.button `
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: var(--font-main-light);
    width: 42%;
    height: 68%;
    background: white;
    border-radius: 8px;
    border: none;
    box-shadow: 0 0 0 rgba(0,0,0,0), 0 0 0 rgba(0,0,0,0);
    transition: all .3s ease-in-out;
    &:hover{
        transform: scale(1.03);
    }
`; 

export const CtInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TxtTitle = styled.h3 `
    font-size: 2rem;
    font-family: var(--font-main);
    color: var(--color-dark);
    margin: 2rem 0px 0px 0px;
`;

export const Txt = styled.p `
    font-size: 1rem;
    font-family: var(--font-main-light);
    margin: 1.5rem;
    line-height: 1.8rem;
    color: var(--color-dark);
    width: 450px;
`;

export const ImgGoogle = styled.img `
    width: 150px;
    margin: 2rem;
`;
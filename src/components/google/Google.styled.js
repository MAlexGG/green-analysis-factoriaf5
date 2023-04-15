import styled from "styled-components";
import google from '../../assets/ex-coders/gen-z-4-2.png';

export const CtGoogle = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${google});
    background-size: cover;
    color: white;
    width: 100%;
    background-repeat: no-repeat;
    height: 550px;
    background-position: center;
`;

export const CtFemCoders = styled.button `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 42%;
    height: 68%;
    background-color: white;
    border-radius: 8px;
    margin: 1rem 0rem 0rem 1rem;
    border: none;
    font-family: var(--font-main);
    transition: width 1s, height 1s;
    &:hover{
        width: 44%;
        height: 70%;
    }
`; 

export const TxtTitle = styled.h3 `
    font-size: 2rem;
    font-weight: var(--font-regular);
    color: var(--color-dark);
    margin: 2rem 0px 0px 0px;
`;

export const Txt = styled.p `
    font-size: 1rem;
    font-weight: var(--font-light);
    margin: 1.5rem;
    line-height: 1.8rem;
    color: var(--color-dark);
`;

export const ImgGoogle = styled.img `
    width: 27%;
    margin: 2rem;
`;
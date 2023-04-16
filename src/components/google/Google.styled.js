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
    position: relative;
`;

export const CtFemCoders = styled.button `
    display: flex;
    justify-content: center;
    font-family: var(--font-main);
    font-weight: var(--font-light);
    position: absolute;
    top: 52%;
    left: 23%;
    width: 42%;
    height: 68%;
    background: white;
    border-radius: 8px;
    border: none;
    box-shadow: 0 0 0 rgba(0,0,0,0), 0 0 0 rgba(0,0,0,0);
    transform: translate(-52%,-52%);
    transition: all 0.3s cubic-bezier(.45,.05,.55,.95) 0s;
    &:hover{
        top: calc( 52% - 0px );
        border: 1px solid rgba(#F2F4F8, 0);
        box-shadow: 0 15px 20px rgba(0,0,0,.05), 0 0 5px rgba(0,0,0,.1);
        cursor: pointer;
        width: 44%;
        height: 70%;
    }
`; 

export const CtInfo = styled.div `
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 450px;
`;

export const ImgGoogle = styled.img `
    width: 150px;
    margin: 2rem;
`;
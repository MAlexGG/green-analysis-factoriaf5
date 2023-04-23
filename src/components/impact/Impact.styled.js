import styled from "styled-components";

export const CtImpact = styled.div `
    width: 100%;
    margin-bottom: 5.5rem;
    position: relative;
`;

export const TxtTitle = styled.h3 `
    font-size: 2.5rem;
    color: var(--color-dark);
    font-family: var(--font-main-bold);
`;

export const CtCounters = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const CtCounter = styled.div `
    background-color: var(--color-main);
    width: 26%;
    height: auto;
    color: white;
    font-family: var(--font-main-bold);
    font-size: 3rem;
    padding: 1.5rem;
    margin: 1rem;
`;

export const Txt = styled.p `
    color: white;
    font-family: var(--font-main-bold);
    font-size: 1.25rem;
    margin: 0px;
`;

export const ImgDeco = styled.img `
    width: 18%;
    position: absolute;
    bottom: -50%;
    right: 3%;
`;

export const CtCoders = styled.div `
    background-color: var(--color-grey);
    width: 100%;
    height: 500px;
    padding-top: 7%;
    height: 700px;
    overflow: hidden;
`;

export const TxtCoders = styled.p `
    font-size: 1.2rem;
    font-family: var(--font-secondary);
    margin: 1rem 5rem;
    line-height: 2.2rem;
    color: var(--color-dark);
`;

export const ImgCoders = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
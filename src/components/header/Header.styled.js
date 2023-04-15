import styled from "styled-components";

export const CtHeader = styled.header `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const CtLinks = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5em;
    width: 100%;
`;

export const CtLang = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2rem;
`;

export const CtSocial = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 13%;
    padding-right: 3rem;
`;

export const ALink = styled.a `
    font-size: 1rem;
    color: var(--color-dark);
    font-weight: var(--font-bold);
    margin: 0px 10px;
`;

export const ImgLinks = styled.img `
    width: auto;
    height: 1.1em;
`;


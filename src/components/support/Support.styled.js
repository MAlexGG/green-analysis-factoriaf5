import styled from "styled-components";

export const CtSupport = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TxtTitle = styled.h2 `
    width: 90%;
    background-color: var(--color-main);
    color: white;
    font-weight: var(--font-regular);
    font-size: 2rem;
    padding: 1%;
`;

export const TxtSubtitle = styled.h3 `
    font-size: 2.5rem;
    font-weight: var(--font-bold);
`;

export const Txt = styled.p `
    font-family: var(--font-secondary);
    font-weight: var(--font-regular);
    color: var(--color-dark);
    font-size: 1.25rem;
    margin: 3% 0% 5% 0%;
`;

export const TxtHashtag = styled.p `
    font-size: 2rem;
    font-weight: var(--font-regular);
    margin: 0px;
`;

export const Video = styled.iframe`
    width: 800px;
    height: 450px;
    margin-top: 3%;
    border: none;
`;
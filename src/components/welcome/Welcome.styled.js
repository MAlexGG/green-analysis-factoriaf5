import styled from "styled-components";

export const CtWelcome = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-main);
    color: white;
    width: 100%;
    padding: 1rem 0rem 5rem 0rem;
`;

export const TxtTitle = styled.h2 `
    font-size: 2.5rem;
    font-weight: var(--font-bold);
    margin: 0rem 0rem 0.5rem 0rem;
`;

export const TxtSubtitle = styled.h3 `
    font-size: 2rem;
    font-weight: var(--font-regular);
`;

export const Txt = styled.p `
    font-size: 1.2rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-regular);
    margin: 1rem 5rem;
    line-height: 2.2rem;
`;
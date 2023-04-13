import styled from "styled-components";

export const CtWelcome = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-main);
    color: white;
    width: 100%;
`;

export const TxtTitle = styled.h2 `
    font-size: 3rem;
    font-weight: var(--font-bold);
`;

export const TxtSubtitle = styled.h3 `
    font-size: 2rem;
    font-weight: var(--font-regular);
`;

export const Txt = styled.p `
    font-size: 1.2rem;
    font-weight: var(--font-regular);
`;
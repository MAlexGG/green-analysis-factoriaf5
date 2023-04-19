import styled from "styled-components";

export const CtFooter = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--color-main);
`;

export const TxtTitle = styled.h2 `
    font-size: 2.5rem;
    font-weight: var(--font-bold);
    color: white;
`;

export const Txt = styled.p `
    font-size: 0.81rem;
    font-weight: var(--font-light);
`;

export const CtButtons = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
    gap: 5%;
`;

export const CtFactoria = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CtSocial = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;
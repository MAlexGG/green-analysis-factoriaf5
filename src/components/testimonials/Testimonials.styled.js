import styled from "styled-components";

export const CtTestimonials = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--color-grey);
    padding-bottom: 4%;
`;

export const TxtTitle = styled.h2 `
    font-size: 2.5rem;
    font-weight: var(--font-bold);
    color: var(--color-dark);
    margin: 5%;
`;

export const CtImg = styled.div `
    width: 150px;
    height: 150px;
    border-radius: 75px;
    overflow: hidden;
`; 

export const Img = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const Txt = styled.p `
    font-weight: var(--font-light);
    font-style: italic;
    font-size: 1.2rem;
    color: var(--color-dark-grey);
    line-height: 1.8rem;
    margin: 5%;
    letter-spacing: 0.1rem;
`; 

export const TxtName = styled.p `
    font-weight: var(--font-light);
    font-size: 1.2rem;
    color: var(--color-dark-grey);
    letter-spacing: 0.1rem;
`; 

export const CtDots = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1%;
`;

export const Dot = styled.div `
    border: 1px solid var(--color-dark-grey);
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin: 0% 0.5%;
`;
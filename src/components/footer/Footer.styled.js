import styled from "styled-components";

export const CtFooter = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--color-main);
    margin-top: 5%;
    padding-bottom: 5%;
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
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 5%;
`;

export const ADonation = styled.a `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    box-shadow: 5px 10px 0px rgba(0,0,0,0.2);
    padding: 0.4rem 3.5rem;
    height: auto;
    letter-spacing: 0rem;
    transition: all .3s ease-in-out;
    &:hover{
        transform: scale(1.03);
    }
`;

export const ATxt = styled.p `
    font-size: 1rem;
    font-weight: var(--font-light);
    color: var(--color-main);
    margin: 0.7rem 0rem;
`;

export const LogoFooter = styled.img `
    width: auto;
`;

export const CtSocial = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const ALink = styled.a `
    font-size: 1rem;
    color: var(--color-dark);
    font-weight: var(--font-bold);
    margin: 0px 10px;
`;

export const ImgLinks = styled.img `
    width: auto;
    height: 1.5em;
    filter: invert(100%);
`;

export const CtNav = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5%;
`;

export const TxtNav = styled.p `
    font-size: 0.8rem;
    font-weight: var(--font-light);
    color: white;
    margin: 0px 10px 0px 0px;
`;
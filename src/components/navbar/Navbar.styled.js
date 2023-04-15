import styled from "styled-components";

export const CtNavbar = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0px;
    position: sticky;
    top: -1px;
    background-color: white;
    z-index: 1;
`;

export const CtLogo = styled.div `
    width: 13.5%;
    height: 100px;
    overflow: hidden;
    margin-left: 1%;
`;

export const ImgLogo = styled.img `
    width: 70%;
    height: 70%;
    object-fit: contain;
`;

export const CtLinks = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 66%;
`;
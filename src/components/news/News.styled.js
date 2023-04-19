import styled from "styled-components";

export const CtNews = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 460px;
    margin: 2% 0%;
`;

export const CtInstagram = styled.a `
    width: 220px;
    height: 220px;
    overflow: hidden;
`;

export const ImgInstagram = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ImgButton = styled.img `
    width: 16px;
    height: auto;
    margin: 10px;
    filter: invert(100%);
`;
import styled from "styled-components";
import google from '../../assets/ex-coders/gen-z-4-2.png';

export const CtGoogle = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${google});
    background-size: cover;
    color: white;
    width: 100%;
    padding: 1rem 0rem 5rem;
    background-repeat: no-repeat;
    height: 450px;
    background-position: center;
`;
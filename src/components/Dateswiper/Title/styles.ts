import styled from "styled-components";

export const TitleWrapper = styled.div`
    position: absolute;
    top: 15%;
    left: 0;
    display: flex;
    align-items: center;
    gap: 78px;
    margin-right: auto;
    height: 120px;

    @media (max-width: 768px) {
        margin-right: auto;
        padding: 20px;
        top: 60px;
    }
`;

export const TitleLine = styled.div`
    height: 100%;
    width: 5px;
    background: ${({ theme }) =>
        `linear-gradient(${theme.palette.tertiary}, ${theme.palette.quaternary})`};

    @media (max-width: 768px) {
        display: none;
    }
`;

export const TitleContent = styled.h1`
    font-weight: 700;
    font-size: 56px;
    line-height: 120%;
    color: ${({ theme }) => theme.palette.primary};
    width: 353px;

    @media (max-width: 768px) {
        font-size: 20px;
        width: 120px;
    }
`;

import styled from "styled-components";

export const ComponentWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const DateswiperWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: ${({ theme }) => `1px solid ${theme.palette.primary}1a`};
    padding: 170px 60px 104px 80px;
    height: 100%;
    width: 1440px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
`;

export const HorizontalLine = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.palette.primary};
    opacity: 0.1;

    @media (max-width: 768px) {
        top: 35%;
        width: 90%;
        left: 5%;
        height: 2px;
        opacity: 0.3;
    }
`;

export const VerticalLine = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 100%;
    width: 1px;
    background: ${({ theme }) => theme.palette.primary};
    opacity: 0.1;

    @media (max-width: 768px) {
        display: none;
    }
`;

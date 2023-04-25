import styled, { keyframes, css } from "styled-components";

type Variant = "primary" | "secondary";
type Index = 0 | 1 | 2 | 3 | 4 | 5;

interface IProps {
    multiplier: number;
    animationRolls: boolean;
}

interface IPointProps {
    multiplier: number;
    index: Index;
    selected: boolean;
}

const positionMap = {
    0: css`
        top: -3px;
        left: calc(25% - 28px);
    `,
    1: css`
        top: 8.5%;
        left: 78.5%;

        &:hover {
            top: calc(calc(8.5% - 2px) - 28px);
            left: calc(78.5% - 28px);
        }
    `,
    2: css`
        top: 48%;
        right: -3px;

        &:hover {
            top: calc(calc(48% - 2px) - 28px);
            right: -25px;
        }
    `,
    3: css`
        bottom: 25px;
        right: 25%;

        &:hover {
            bottom: -5px;
            right: calc(25% - 28px);
        }
    `,
    4: css`
        bottom: 4%;
        left: 28.5%;

        &:hover {
            bottom: calc(calc(4% - 2px) - 28px);
            left: calc(28.5% - 28px);
        }
    `,
    5: css`
        bottom: 48%;
        left: -3px;

        &:hover {
            bottom: calc(calc(48% - 2px) - 28px);
            left: -25px;
        }
    `,
};

const dateColorMap = {
    primary: css`
        color: ${({ theme }) => theme.palette.secondary};
    `,
    secondary: css`
        color: ${({ theme }) => theme.palette.quaternary};
    `,
};

const spin = (deg: number) => keyframes`
    0% {
        transform: translateX(-50%) rotate(${deg - 60}deg);
    }
    100% {
        transform: translateX(-50%) rotate(${deg}deg);
    }
`;

const spinResistance = (deg: number) => keyframes`
    0% {
        transform: rotate(${deg + 60}deg);
    }
    100% {
        transform: rotate(${deg}deg);
    }
`;

export const CirlceWrapper = styled.div<IProps>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 15%;
    height: 460px;
    width: 460px;
    border-radius: 265px;
    border: ${({ theme }) => `1px solid ${theme.palette.primary}1a`};
    background: transparent;
    z-index: 2;

    ${({ animationRolls, multiplier }) =>
        animationRolls &&
        css`
            animation: ${() => spin(60 * multiplier)} 0.3s linear;
        `}
    transform: translateX(-50%) rotate(60deg);

    @media (max-width: 768px) {
        height: 200px;
        width: 200px;
    }

    @media (max-width: 768px) {
        border: none;
    }
`;

export const DatePointContent = styled.span<{ selected: boolean }>`
    display: ${({ selected }) => (selected ? "block" : "none")};
    background: transparent;
    color: ${({ theme }) => theme.palette.primary};
`;

export const PointSection = styled.span<{ selected: boolean }>`
    position: absolute;
    display: ${({ selected }) => (selected ? "block" : "none")};
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.palette.primary};
    background: transparent;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-left: 160px;
`;

export const DatePointWrapper = styled.div<IPointProps>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.primary};
    transform: rotate(-60deg);
    z-index: 2;
    transition: all 0.2s ease-in-out;

    ${({ index }) => positionMap[index]};
    ${({ selected }) =>
        selected
            ? css`
                  width: 56px;
                  height: 56px;
                  background: ${({ theme }) => theme.palette.quinary};
                  border: ${({ theme }) =>
                      `1px solid ${theme.palette.primary}`};
              `
            : css`
                  &:hover {
                      width: 56px;
                      height: 56px;
                      background: ${({ theme }) => theme.palette.quinary};
                      border: ${({ theme }) =>
                          `1px solid ${theme.palette.primary}`};

                      ${DatePointContent} {
                          display: block;
                      }

                      ${PointSection} {
                          display: block;
                      }
                  }
              `}

    @media (max-width: 768px) {
        display: none;
    }
`;

export const DatesWrapper = styled.div<IProps>`
    display: flex;
    gap: 30px;
    ${({ animationRolls, multiplier }) =>
        animationRolls &&
        css`
            animation: ${() => spinResistance(-60 * multiplier)} 0.3s linear;
        `}
    transform: rotate(-60deg);
    background: transparent;
`;

export const DateTitle = styled.span<{ variant: Variant }>`
    ${({ variant }) => dateColorMap[variant]};
    font-weight: 700;
    font-size: 150px;
    letter-spacing: -0.02em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: transparent;

    @media (max-width: 768px) {
        font-size: 56px;
    }
`;

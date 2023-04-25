import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import "swiper/modules/navigation/navigation-element.min.css";
import "swiper/modules/pagination/pagination-element.min.css";

export const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-top: auto;

    @media (max-width: 768px) {
        margin-top: 90%;
        gap: 70px;
        flex-direction: column-reverse;
    }
`;

export const NavigationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
        gap: 5px;
        margin-top: auto;
    }
`;

export const NavigationNumber = styled.span`
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.palette.primary};
`;

export const NavigationButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

export const NavigationButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border: ${({ theme }) => `1px solid ${theme.palette.primary}`};
    cursor: pointer;
    opacity: 0.3;
    z-index: 2;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 1;
        background: ${({ theme }) => theme.palette.quinary};
    }

    @media (max-width: 768px) {
        height: 25px;
        width: 25px;

        img {
            transform: scale(0.5);
        }
    }
`;

export const SwiperWrapper = styled(Swiper).attrs({
    modules: [Navigation, Pagination],
    spaceBetween: 10,
    slidesPerView: 2,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    pagination: {
        el: ".pagination",
        clickable: true,
        renderBullet: (index: number, className: string) => {
            return '<span class="' + className + '" /></span>';
        },
    },
    breakpoints: {
        786: { slidesPerView: 3, spaceBetween: 80 },
    },
})<{ opacity: number }>`
    opacity: ${({ opacity }) => (opacity ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;

    @media (max-width: 768px) {
        .swiper-slide-next {
            opacity: 0.3;
        }

        div:nth-last-child(-n + 1) {
            opacity: 1;
        }
    }
`;

export const PaginationWrapper = styled.div`
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 40% 60%;
    }
`;

export const SwiperPagination = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const SwiperContentWrapper = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: transparent;
`;

export const DateTitle = styled.span`
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: 25px;
    line-height: 120%;
    color: ${({ theme }) => theme.palette.tertiary};
`;

export const DateEvent = styled.span`
    font-size: 20px;
    line-height: 30px;
    color: ${({ theme }) => theme.palette.primary};
`;

export const SwiperNavigatorWrapper = styled.div`
    position: relative;

    .swiper-prev {
        left: -60px;
    }

    .swiper-next {
        right: -45px;
    }

    .swiper-button-disabled {
        display: none;
    }
`;

export const NavigatorButton = styled.div`
    position: absolute;
    display: flex;
    top: 30%;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    background: ${({ theme }) => theme.palette.quinary};
    box-shadow: ${({ theme }) => `0px 0px 15px ${theme.palette.tertiary}1a`};

    @media (max-width: 768px) {
        display: none;
    }
`;

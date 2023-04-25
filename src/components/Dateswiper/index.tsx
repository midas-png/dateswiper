import React, { FC } from "react";
import {
    ComponentWrapper,
    DateswiperWrapper,
    HorizontalLine,
    VerticalLine,
} from "./styles";
import { Title } from "./Title";
import { Swiper } from "./Swiper";
import { Circle } from "./Circle";

export const Dateswiper: FC = () => {
    return (
        <ComponentWrapper>
            <DateswiperWrapper>
                <Title />
                <Circle />
                <Swiper />
                <HorizontalLine />
                <VerticalLine />
            </DateswiperWrapper>
        </ComponentWrapper>
    );
};

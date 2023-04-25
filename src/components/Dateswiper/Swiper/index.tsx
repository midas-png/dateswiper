import React, { useState, useEffect, FC } from "react";
import {
    ComponentWrapper,
    NavigationWrapper,
    NavigationNumber,
    NavigationButtonsWrapper,
    NavigationButton,
    NavigatorButton,
    SwiperWrapper,
    SwiperContentWrapper,
    SwiperNavigatorWrapper,
    SwiperPagination,
    PaginationWrapper,
    DateTitle,
    DateEvent,
} from "./styles";
import { Assets } from "assets";
import { useDates } from "context";

export const Swiper: FC = () => {
    const [firstRender, setFirstRender] = useState(true);
    const [visible, setVisible] = useState(true);
    const {
        sectionData,
        sections,
        section,
        incrementSection,
        decrementSection,
    } = useDates();
    const [sectionsEvents, setSectionsEvents] = useState(
        sectionData?.events || []
    );

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
            return;
        }

        setVisible(false);
        const visibleTimeout = setTimeout(() => {
            setVisible(true);
            setSectionsEvents(sectionData?.events || []);
        }, 500);

        return () => clearTimeout(visibleTimeout);
    }, [sections]);

    return (
        <ComponentWrapper>
            <NavigationWrapper>
                <NavigationNumber>0{section}/06</NavigationNumber>
                <PaginationWrapper>
                    <NavigationButtonsWrapper>
                        <NavigationButton onClick={decrementSection}>
                            <img src={Assets.ArrowLeft} />
                        </NavigationButton>
                        <NavigationButton onClick={incrementSection}>
                            <img src={Assets.ArrowRight} />
                        </NavigationButton>
                    </NavigationButtonsWrapper>
                    <SwiperPagination className="pagination" />
                </PaginationWrapper>
            </NavigationWrapper>
            <SwiperNavigatorWrapper>
                <NavigatorButton className="swiper-prev">
                    <img src={Assets.BlueArrowLeft} />
                </NavigatorButton>
                <SwiperWrapper opacity={Number(visible)}>
                    {sectionsEvents.map(({ date, description }) => (
                        <SwiperContentWrapper key={Math.random()}>
                            <DateTitle>{date}</DateTitle>
                            <DateEvent>{description}</DateEvent>
                        </SwiperContentWrapper>
                    ))}
                </SwiperWrapper>
                <NavigatorButton className="swiper-next">
                    <img src={Assets.BlueArrowRight} />
                </NavigatorButton>
            </SwiperNavigatorWrapper>
        </ComponentWrapper>
    );
};

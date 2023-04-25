import React, { useState, useEffect, FC } from "react";
import {
    CirlceWrapper,
    PointSection,
    DatePointWrapper,
    DatePointContent,
    DatesWrapper,
    DateTitle,
} from "./styles";
import { useDates } from "context";
import { SECTIONS } from "data";

type Index = 0 | 1 | 2 | 3 | 4 | 5;

export const Circle: FC = () => {
    const { sectionData, sections, setSection, setSections, section } =
        useDates();
    const [dates, setDates] = useState(sectionData?.dates || []);
    const finishDates = sectionData?.dates || [];
    const [animationRolls, setAnimationRolls] = useState<boolean>(false);
    const [firstRender, setFirstRender] = useState<boolean>(true);
    const intervalIds: number[] = [];
    let multiplier = section < 1 ? 1 : section;

    const handleSectionClick = (newSection: Index): void => {
        let filtered = sections.filter((section) => section !== newSection);
        filtered = [newSection].concat(filtered as Index[]);
        setSections(filtered as Index[]);
        setSection(newSection);
    };

    const handleDatesUpdate = (index: 0 | 1) => {
        const isFinishedIncremented = (oldArray: Array<number>) =>
            oldArray[index] + 1 === finishDates[index];
        const isFinishedDecremented = (oldArray: Array<number>) =>
            oldArray[index] - 1 === finishDates[index];

        const intervalId = setInterval(() => {
            if (dates[index] === finishDates[index]) return;

            if (dates[index] < finishDates[index]) {
                if (index === 0) {
                    setDates((oldArray) => {
                        if (isFinishedIncremented(oldArray)) {
                            clearInterval(intervalId);
                        }
                        return [oldArray[0] + 1, oldArray[1]];
                    });
                } else {
                    setDates((oldArray) => {
                        if (isFinishedIncremented(oldArray)) {
                            clearInterval(intervalId);
                        }
                        return [oldArray[0], oldArray[1] + 1];
                    });
                }
            } else {
                if (index === 0) {
                    setDates((oldArray) => {
                        if (isFinishedDecremented(oldArray)) {
                            clearInterval(intervalId);
                        }
                        return [oldArray[0] - 1, oldArray[1]];
                    });
                } else {
                    setDates((oldArray) => {
                        if (isFinishedDecremented(oldArray)) {
                            clearInterval(intervalId);
                        }
                        return [oldArray[0], oldArray[1] - 1];
                    });
                }
            }
        }, 5);
        intervalIds.push(intervalId);
    };

    useEffect(() => {
        intervalIds.forEach((id) => {
            clearInterval(id);
        });
        handleDatesUpdate(0);
        handleDatesUpdate(1);
    }, [finishDates]);

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
            return;
        }
        setAnimationRolls(true);
    }, [section, sections]);

    return (
        <CirlceWrapper
            multiplier={multiplier}
            animationRolls={animationRolls}
            onAnimationEnd={() => setAnimationRolls(false)}
        >
            {sections.map((sectionNumber, index) => (
                <DatePointWrapper
                    multiplier={section}
                    index={index as Index}
                    selected={section === index + 1}
                    onClick={() => handleSectionClick(sectionNumber as Index)}
                    key={Math.random()}
                >
                    <DatePointContent selected={section === index + 1}>
                        {sectionNumber + 1}
                    </DatePointContent>
                    <PointSection selected={section === index + 1}>
                        {SECTIONS[sectionNumber].name}
                    </PointSection>
                </DatePointWrapper>
            ))}
            <DatesWrapper multiplier={section} animationRolls={animationRolls}>
                <DateTitle variant="primary">{dates[0]}</DateTitle>
                <DateTitle variant="secondary">{dates[1]}</DateTitle>
            </DatesWrapper>
        </CirlceWrapper>
    );
};

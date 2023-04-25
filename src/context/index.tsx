import React, {
    useState,
    createContext,
    useContext,
    FC,
    ReactNode,
} from "react";
import { SECTIONS } from "data";

type Index = 0 | 1 | 2 | 3 | 4 | 5;

const DatesContext = createContext({
    sections: [0, 1, 2, 3, 4, 5],
    setSections: (sections: Array<Index>) => {},
    section: 1,
    sectionData: SECTIONS.find((i) => i.id === 1),
    setSection: (section: number) => {},
    incrementSection: (): void => {},
    decrementSection: (): void => {},
});

export const DatesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const sectionsArray: Array<Index> = [0, 1, 2, 3, 4, 5];
    const [sections, setSections] = useState<Array<Index>>(sectionsArray);
    const [section, setSection] = useState<number>(1);
    const sectionData = SECTIONS.find((i) => i.id === section);

    const incrementSection = () => {
        if (section < 6) {
            const index = section + 1 <= 5 ? section + 1 : 0;
            const element = sections[index];
            let filtered = sections.filter((section) => section !== element);
            filtered = [element].concat(filtered);
            setSections(filtered);
            setSection((prev) => prev + 1);
        } else {
            setSection(1);
            setSections(sectionsArray);
        }
    };

    const decrementSection = () => {
        if (section > 1) {
            const copySections = [...sections];
            copySections.unshift(copySections.pop() as Index);
            setSections(copySections);
            setSection((prev) => prev - 1);
        } else {
            setSection(6);
            setSections(sectionsArray);
        }
    };

    const datesValues = {
        sections,
        setSections,
        section,
        sectionData,
        setSection,
        incrementSection,
        decrementSection,
    };

    return (
        <DatesContext.Provider value={datesValues}>
            {children}
        </DatesContext.Provider>
    );
};

export const useDates = () => {
    return useContext(DatesContext);
};

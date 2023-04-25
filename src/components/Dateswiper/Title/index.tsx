import React, { FC } from "react";
import { TitleWrapper, TitleLine, TitleContent } from "./styles";

export const Title: FC = () => {
    return (
        <TitleWrapper>
            <TitleLine />
            <TitleContent>Исторические даты</TitleContent>
        </TitleWrapper>
    );
};

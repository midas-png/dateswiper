import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "features";
import { Dateswiper } from "components";
import { DatesProvider } from "context";
import { GlobalStyles } from "./globalStyles";

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <DatesProvider>
                <GlobalStyles />
                <Dateswiper />
            </DatesProvider>
        </ThemeProvider>
    );
};

import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        fontFamily: {
            primary: string;
            secondary: string;
        };
        palette: {
            primary: string;
            secondary: string;
            tertiary: string;
            quaternary: string;
            quinary: string;
            background: string;
        };
    }
}

import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string,
        colors: {
            colorPrimary: string,
            colorPrimary50: string,
            colorSecondary: string,
            colorBackground: string,

            gray600: string,
            gray400: string,
            gray300: string,
            gray100: string,
            gray75: string,
            gray50: string,
            gray25: string,
            gray0: string,

            negative: string,
            warning: string,
            sucess: string,
            information: string,
        }
    }
} 
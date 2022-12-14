
export interface ThemeFontWeight {
    regular: Fontbase;
    bold: Fontbase;
    demiBold: Fontbase;
}

export type Fontbase = {
    fontFamily: string;
    fontWeight: string;
}

export type ThemeColors = { [key: string]: string }
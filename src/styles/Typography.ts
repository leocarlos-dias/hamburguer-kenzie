import styled, { css } from "styled-components"

export const modifierFont: any = {
    extraSmall: () => css`
        font-size: 0.75rem;
        @media (min-width: 768px) {
            font-size: 0.875rem;
        }
    `,

    small: () => css`
      font-size: 0.875rem;
        @media (min-width: 768px) {
            font-size: 1rem;
        }
    `,

    medium: () => css`
        font-size: 1rem;
        @media (min-width: 768px) {
            font-size: 1.125rem;
        }
    `,

    large: () => css`
        font-size: 1.125rem;
        @media (min-width: 768px) {
            font-size: 1.25rem;
        }
    `,

    extraLarge: () => css`
        font-size: 1.625rem;
        @media (min-width: 768px) {
            font-size: 1.75rem;
        }
    `,

    regular: () => css`
        font-weight: 400;
    `,

    semiBold: () => css`
        font-weight: 600;
    `,

    bold: () => css`
        font-weight: 700;
    `,

    gray600: () => css`
        color: var(--gray-600);
    `,

    gray300: () => css`
        color: var(--gray-300);
    `,

    gray100: () => css`
        color: var(--gray-100);
    `,

    gray50: () => css`
        color: var(--gray-50);
    `,

    white: () => css`
        color: white;
    `,

    primary: () => css`
        color: var(--color-primary);
    `,

    negative: () => css`
        color: var(--negative);
    `,
}

interface ITypography {
    size: string;
    color: string;
    weight: string;
    align?: string;
}

export const Title = styled.h1<ITypography>`
    ${(props) => modifierFont[props.size]()};
    ${(props) => modifierFont[props.color]()};
    ${(props) => modifierFont[props.weight]()};
    text-align: ${(props) => props.align};
`

export const TitleTwo = styled.h2<ITypography>`
    ${(props) => modifierFont[props.size]()};
    ${(props) => modifierFont[props.color]()};
    ${(props) => modifierFont[props.weight]()};
    text-align: ${(props) => props.align};
`

export const TitleThree = styled.h3<ITypography>`
    ${(props) => modifierFont[props.size]()};
    ${(props) => modifierFont[props.color]()};
    ${(props) => modifierFont[props.weight]()};
    text-align: ${(props) => props.align};
`

export const Paragraph = styled.p<ITypography>`
    ${(props) => modifierFont[props.size]()};
    ${(props) => modifierFont[props.color]()};
    ${(props) => modifierFont[props.weight]()};
    text-align: ${(props) => props.align};
`

export const Text = styled.span<ITypography>`
    ${(props) => modifierFont[props.size]()};
    ${(props) => modifierFont[props.color]()};
    ${(props) => modifierFont[props.weight]()};
    text-align: ${(props) => props.align};
`
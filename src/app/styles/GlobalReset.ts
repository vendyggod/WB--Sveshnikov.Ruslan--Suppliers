import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    :root {
        /* Font weight */
        --font-weight-normal: 500;

        /* Border radius */
        --border-radius-sm: 10px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    *::-webkit-scrollbar {
        display: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "ALSHauss", "Arial", serif;
        font-weight: var(--font-weight-normal);
        color: ${({ theme }) => theme.colors.textPrimary};
        background-color: ${({ theme }) => theme.colors.greyPrimary};
        transition: color 0.3s, background-color 0.3s;
        line-height: 1.5;
        font-size: 1.6rem;

    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    *:disabled {
        cursor: not-allowed;
    }

    select {
        appearance: none;
    }

    input:focus,
    button:focus,
    textarea:focus,
    select:focus {
        outline: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        hyphens: auto;
    }

    img {
        max-width: 100%;
    }

    .body-no-scroll {
        overflow: hidden;
        position: fixed;
        width: 100%;
    }

    /* FONTS */

    /* Regular */
    @font-face {
        font-family: 'ALSHauss';
        src: local('ALSHauss'),
        url('/fonts/ALSHaussRegular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    /* Medium */
    @font-face {
        font-family: 'ALSHauss';
        src: local('ALSHauss'),
        url('/fonts/ALSHaussMedium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    /* Bold */
    @font-face {
        font-family: 'ALSHauss';
        src: local('ALSHauss'),
        url('/fonts/ALSHaussBold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    /* Light */
    @font-face {
        font-family: 'ALSHauss';
        src: local('ALSHauss'),
        url('/fonts/ALSHaussLight.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

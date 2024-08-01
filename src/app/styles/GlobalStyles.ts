"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    * {
        box-sizing: border-box;
    }

    body {
        -ms-overflow-style: none;
    }
`;

export default GlobalStyles;

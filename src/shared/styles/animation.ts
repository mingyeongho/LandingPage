"use client";

import { keyframes } from "styled-components";

export const ZOOM_IN = keyframes`
    0% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);    
    }
`;

export const FADE_IN = keyframes`
    0% {
        opacity: 0;
        visibility: hidden;
    }
    100% {
        opacity: 1;
        visibility: visible;
    }
`;

export const JUMP = keyframes`
    0% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    50% {
        transform: translateY(0);
    }
    60% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0);
    }
`;

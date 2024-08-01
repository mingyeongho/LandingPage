"use client";

import { THEMES } from "@/src/shared";
import styled from "styled-components";

export const FullContainer = styled.main`
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: ${THEMES.COLORS.BASE100};
  padding: 80px 0;

  & > section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;

    max-width: 1048px;
    margin-inline: auto;
    min-height: 100%;

    padding: 0 20px;
  }

  @media screen and (max-width: 1048px) {
    /* & > section {
      grid-template-columns: repeat(1, 1fr);
    } */
  }

  @media screen and (max-width: 576px) {
    & > section {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
  }
`;

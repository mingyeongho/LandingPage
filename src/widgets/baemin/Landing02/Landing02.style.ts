"use client";

import { THEMES } from "@/src/shared";
import styled from "styled-components";

export const Contents = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  margin-inline: auto;
  padding: 165px 50px 0;

  & > .title {
    position: relative;
    z-index: 3;
    width: 584px;
    margin-bottom: 30px;
  }

  & > .text {
    margin-top: 3%;
    font-size: 16px;
    color: ${THEMES.COLORS.WHITE};
    line-height: 1.38;
  }
`;

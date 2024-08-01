"use client";

import { THEMES } from "@/src/shared";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${THEMES.COLORS.배민.ACCENT};

  & > section {
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    position: relative;
  }

  span {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
`;

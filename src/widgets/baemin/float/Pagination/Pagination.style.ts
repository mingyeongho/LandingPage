"use client";

import { ICONS } from "@/src/shared";
import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 47%;
  right: 11%;
  display: block;
  opacity: 0;
  transition: opacity 0.5s ease-in-out 0.3s;
  unicode-bidi: isolate;

  &[aria-disabled="false"] {
    opacity: 1;
  }

  & > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > li > button {
      background-color: transparent;
      border: none;
      outline: none;

      background-image: url(${ICONS.배민.INACTIVE_DOT});
      background-repeat: no-repeat;
      background-size: cover;
      width: 24px;
      height: 24px;
      cursor: pointer;

      &[data-active="true"] {
        background-image: url(${ICONS.배민.ACTIVE_DOT});
      }
    }
  }
`;

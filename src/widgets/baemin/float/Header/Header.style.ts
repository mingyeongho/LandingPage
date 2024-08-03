"use client";

import { FADE_IN, ICONS } from "@/src/shared";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  max-width: 1024px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 60px 173px 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;

  animation: ${FADE_IN} 1s ease 0.3s 1 normal forwards;

  &[aria-expanded="true"] {
    padding: 60px 60px 0px 50px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  & > button {
    padding: 0;
    height: 48px;

    display: flex;
    align-items: center;

    background-color: transparent;
    border: none;
    outline: none;

    & > img {
      cursor: pointer;
    }
  }

  & > div {
    display: block;
    opacity: 1;
    width: 140px;
    height: 48px;
    margin-left: 8px;
    background-image: url(${ICONS.배민.APP_DOWNLOAD});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    &[aria-disabled="true"] {
      display: none;
      opacity: 0;
    }
  }
`;

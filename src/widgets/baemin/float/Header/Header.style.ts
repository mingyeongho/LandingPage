"use client";

import { FADE_IN } from "@/src/shared";
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
`;

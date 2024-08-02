"use client";

import styled from "styled-components";
import { FROM_RIGHT } from "@/src/shared";

export const Container = styled.div<{ $thumbnailImage: string }>`
  width: 100%;
  max-width: 1024px;
  min-height: 100%;
  margin-inline: auto;
  padding: 165px 50px 0px;
  position: relative;

  & > .title {
    position: relative;
    width: 584px;
    z-index: 3;
  }

  & > .thumbnail {
    position: absolute;
    z-index: 2;
    bottom: -3%;
    right: -30%;
    opacity: 0;

    &.active {
      animation: ${FROM_RIGHT} 0.8s ease 500ms 1 normal forwards running;
    }

    & > i {
      display: block;
      max-width: 700px;
      max-height: 700px;
      width: 48.6vw;
      height: 48.6vw;
      background-image: url(${({ $thumbnailImage }) => $thumbnailImage});
      background-size: cover;
    }
  }
`;

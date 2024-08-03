"use client";

import { ICONS, ZOOM_IN } from "@/src/shared";
import styled from "styled-components";

export const BgImage = styled.div<{ $image: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${ZOOM_IN} 1s linear 0s 1 normal forwards running;
`;

export const Contents = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  margin-inline: auto;
  padding: 165px 50px 0;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const DownloadContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & > span {
    user-select: none;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.38;
    color: #fff;
  }

  & > .store_download {
    display: flex;
    gap: 12px;

    button {
      width: 200px;
      height: 70px;
      border: none;
      outline: none;
      border-radius: 100px;
      padding: 15px 30px;

      background-repeat: no-repeat;
      background-position: center;
      background-color: white;
      background-size: 140px;

      cursor: pointer;
    }
    .apple {
      background-image: url(${ICONS.배민.APP_STORE});
    }
    .google {
      background-image: url(${ICONS.배민.GOOGLE_PLAY});
    }
  }

  .qr {
    width: 225px;
  }
`;

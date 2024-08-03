"use client";

import Image from "next/image";
import styled from "styled-components";

export const RiderButton = styled(Image)`
  position: fixed;
  top: 0;
  right: 0;
  opacity: 1;
  transition: opacity 0.5s ease-in-out 0.3s;

  &[aria-disabled="true"] {
    opacity: 0;
  }
`;

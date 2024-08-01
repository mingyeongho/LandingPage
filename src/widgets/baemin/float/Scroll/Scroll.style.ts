"use client";

import { JUMP } from "@/src/shared";
import Image from "next/image";
import styled from "styled-components";

export const Scroll = styled(Image)`
  position: fixed;
  bottom: 3%;
  left: calc(50% - 34px);

  animation: ${JUMP} 0.5s ease 0s 3 normal none running;
`;

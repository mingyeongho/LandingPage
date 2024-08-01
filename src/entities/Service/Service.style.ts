"use client";

import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  flex: 1;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  & > img {
    transition: transform 0.3s ease-in;
  }

  &:hover {
    & > img {
      transform: scale(1.1);
    }
  }
`;

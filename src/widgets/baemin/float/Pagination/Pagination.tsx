"use client";

import { useFullPage } from "@/src/features";
import * as S from "./Pagination.style";

const Pagination = () => {
  const { currentSection, onClickPage } = useFullPage();

  return (
    <S.Container aria-disabled={currentSection === 0}>
      <ul>
        <li>
          <button
            data-active={currentSection === 1}
            onClick={() => onClickPage(1)}
          />
        </li>
        <li>
          <button
            data-active={currentSection === 2}
            onClick={() => onClickPage(2)}
          />
        </li>
        <li>
          <button
            data-active={currentSection === 3}
            onClick={() => onClickPage(3)}
          />
        </li>
        <li>
          <button
            data-active={currentSection === 4}
            onClick={() => onClickPage(4)}
          />
        </li>
        <li>
          <button
            data-active={currentSection === 5}
            onClick={() => onClickPage(5)}
          />
        </li>
        <li>
          <button
            data-active={currentSection === 6}
            onClick={() => onClickPage(6)}
          />
        </li>
        <li>
          <button
            data-active={currentSection === 7}
            onClick={() => onClickPage(7)}
          />
        </li>
      </ul>
    </S.Container>
  );
};

export default Pagination;

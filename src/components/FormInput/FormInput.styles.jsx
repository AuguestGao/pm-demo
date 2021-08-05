import styled, { css } from "styled-components";

const shrinkLabel = css`
  top: -16px;
  font-size: 12px;
  color: black;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 15px;
`;

export const FormInputContainer = styled.input`
  width: 100%;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  font-size: 1.1rem;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabel}
  }
`;

export const FormInputLabel = styled.label`
  color: lightgray;
  font-size: 1.1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: -5px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabel}
  }
`;

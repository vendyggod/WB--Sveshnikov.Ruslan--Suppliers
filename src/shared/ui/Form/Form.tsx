import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const FormInfo = styled.span`
  color: ${({ theme }) => theme.colors.textGrey};
  font-weight: 400;
  margin-bottom: 2.4rem;
`;

export const FormRowLabel = styled.label`
  color: ${({ theme }) => theme.colors.textGrey};
  font-weight: 500;
  font-size: 1.3rem;
  padding: 0.6rem 0.6rem 0 0.6rem;
`;

export const FormRowInput = styled.input<{ error?: boolean }>`
  padding: 1.2rem 4.2rem 1.2rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.greySecondary};
  border-radius: 10px;
  border: ${({ error }) => (error ? "#ff0000" : "none")};
  font-weight: 400;
  appearance: none;
`;

export const StyledFormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select<{ error?: boolean }>`
  width: 100%;
  padding: 1.2rem 4.2rem 1.2rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.greySecondary};
  border-radius: 10px;
  border: ${({ error }) => (error ? "#ff0000" : "none")};
  font-weight: 400;
  appearance: none;
  cursor: pointer;
`;

export const SelectIcon = styled.div`
  position: absolute;
  right: 1.6rem;
  top: 60%;
  transform: translateY(-50%);
  pointer-events: none;

  svg {
    width: 1.6rem;
    height: 1.6rem;
    fill: ${({ theme }) => theme.colors.textGrey};
  }
`;

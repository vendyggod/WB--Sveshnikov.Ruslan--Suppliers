import styled, { css } from "styled-components";

const variations = {
  primary: css`
    background-color: #4649e5;

    &:hover {
      background-color: #6366f1;
    }
  `,
  secondary: css`
        background-color: transparent;

        &:hover {
            background-color ${({ theme }) => theme.colors.greySecondary};
        }
    `,
};

export const FormButton = styled.button<{ $variation: any }>`
  padding: 0.8rem;
  border: none;
  border-radius: 1rem;

  ${({ $variation }) => variations[`${$variation}`]}
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 1.2rem;
`;

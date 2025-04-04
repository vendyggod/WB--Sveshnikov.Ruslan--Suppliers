import styled from "styled-components";

export const ButtonAction = styled.button<{ $path: string }>`
  height: 3.6rem;
  width: 3.6rem;

  border: none;
  background-color: transparent;
  background-image: ${(props) => `url(${props.$path})`};
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;

  &:hover {
    background-color: #4c4b51;
  }
`;

export const ButtonActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 36rem;
  width: 49.6rem;
  background-color: ${({ theme }) => theme.colors.greyPrimary};
  border-radius: 16px;
  padding: 4.8rem 4.8rem 3.2rem 4.8rem;
  transition: all ease 0.5s;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  transition: all ease 0.5s;
`;

export const Button = styled.button`
  background: none;
  border: none;
  transition: all 0.2s;
  position: absolute;
  top: 1rem;
  right: 1rem;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

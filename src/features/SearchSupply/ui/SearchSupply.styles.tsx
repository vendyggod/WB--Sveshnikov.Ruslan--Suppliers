import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 36.5rem;
  padding: 0.4rem;
  background-color: ${({ theme }) => theme.colors.greySecondary};
  border-radius: 14px;
`;

export const FilterSelect = styled.select`
  background-color: ${({ theme }) => theme.colors.greyPrimary};
  border: none;
  padding: 0.8rem;
  border-radius: 8px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("/images/icon-chevron-down.svg");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 2.4rem 2.4rem;

  &::-ms-expand {
    display: none;
  }

  & option {
    background-color: #fff;
    color: #000;

    &:hover {
      background-color: #f0f0f3;
    }
  }
`;

export const SearchInput = styled.input`
  padding: 0.8rem 0 0.8rem 1.2rem;
  background-color: transparent;
  border: none;

  &::placeholder {
    font-weight: 400;
  }
`;

export const IconSearch = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  background-image: url("/images/icon-search.svg");
  stroke: #6e6d72;
  fill: #6e6d72;
  height: 2.4rem;
  width: 2.4rem;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
`;

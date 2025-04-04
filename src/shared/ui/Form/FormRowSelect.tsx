import { FC, ReactElement } from "react";
import { SelectIcon, SelectWrapper, StyledSelect } from "./Form.tsx";

interface FormRowSelectProps {
  id?: string;
  children: ReactElement[];
  disabled?: boolean;
  register?: any;
}

export const FormRowSelect: FC<FormRowSelectProps> = ({
  id,
  children,
  disabled,
  register,
}) => {
  return (
    <SelectWrapper>
      <StyledSelect id={id} disabled={disabled} {...register}>
        {children}
      </StyledSelect>
      <SelectIcon>
        <img src="/images/icon-chevron-down.svg" alt="Показать список" />
      </SelectIcon>
    </SelectWrapper>
  );
};

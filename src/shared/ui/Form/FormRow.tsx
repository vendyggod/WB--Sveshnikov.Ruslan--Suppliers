import { FormRowLabel, StyledFormRow } from "./Form.tsx";
import { FC, ReactElement } from "react";
import { FieldError } from "react-hook-form";

interface FormRowProps {
  label?: string;
  children: ReactElement<{ id: string }>;
  error?: FieldError;
}

export const FormRow: FC<FormRowProps> = ({ label, children }) => {
  return (
    <StyledFormRow>
      {label && (
        <FormRowLabel htmlFor={children?.props.id}>{label}</FormRowLabel>
      )}
      {children}
    </StyledFormRow>
  );
};

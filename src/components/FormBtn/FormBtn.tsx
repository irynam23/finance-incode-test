import { ReactEventHandler, ReactNode } from "react";
import { StyledButton } from "./FormBtn.styled";
import { FieldValues, SubmitHandler } from "react-hook-form";
interface IFormBtnProps {
  onClick:
    | ReactEventHandler<HTMLButtonElement>
    | SubmitHandler<FieldValues>
    | (() => void);
  children: ReactNode;
  disabled?: boolean;
}

export const FormBtn: React.FC<IFormBtnProps> = ({
  onClick,
  children,
  disabled,
}) => {
  return (
    <StyledButton disabled={disabled} type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

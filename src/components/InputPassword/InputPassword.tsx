import { useState, forwardRef } from "react";
import {
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledButton,
} from "./InputPassword.styled";
import { ReactComponent as EyeEmpty } from "../../icons/eye_empty.svg";
import { ReactComponent as EyeOff } from "../../icons/eye_off.svg";

export const InputPassword = forwardRef((props: any, ref) => {
  const [isPasswordMasked, setIsPasswordMasked] = useState(true);

  const togglePasswordMask = () => {
    setIsPasswordMasked((prev) => !prev);
  };

  return (
    <>
      <StyledLabel>Password</StyledLabel>
      <StyledInputWrapper>
        <StyledInput
          ref={ref}
          type={isPasswordMasked ? "password" : "text"}
          {...props}
        ></StyledInput>
        <StyledButton type="button" onClick={togglePasswordMask}>
          {isPasswordMasked ? <EyeOff /> : <EyeEmpty />}
        </StyledButton>
      </StyledInputWrapper>
    </>
  );
});

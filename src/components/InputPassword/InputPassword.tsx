import { useState } from "react";
import {
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledButton,
} from "./InputPassword.styled";
import { ReactComponent as EyeEmpty } from "../../icons/eye_empty.svg";
import { ReactComponent as EyeOff } from "../../icons/eye_off.svg";

export const InputPassword = () => {
  const [isPasswordMasked, setIsPasswordMasked] = useState(true);

  const togglePasswordMask = () => {
    setIsPasswordMasked((prev) => !prev);
  };

  return (
    <>
      <StyledLabel>Password</StyledLabel>
      <StyledInputWrapper>
        <StyledInput
          type={isPasswordMasked ? "password" : "text"}
        ></StyledInput>
        <StyledButton type="button" onClick={togglePasswordMask}>
          {isPasswordMasked ? <EyeOff /> : <EyeEmpty />}
        </StyledButton>
      </StyledInputWrapper>
    </>
  );
};

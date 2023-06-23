import { FormBtn } from "../FormBtn/FormBtn";
import { InputPassword } from "../InputPassword/InputPassword";
import {
  StyledForm,
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledInfo,
  StyledTitle,
  StyledWrapper,
} from "./SignIn.styled";

export const SignIn: React.FC<{
  toggleSignIn: () => void;
}> = ({ toggleSignIn }) => {
  return (
    <StyledWrapper>
      <StyledTitle>Sign In</StyledTitle>
      <StyledForm>
        <StyledLabel>User Name</StyledLabel>
        <StyledInputWrapper>
          <StyledInput type="text" />
        </StyledInputWrapper>
        <InputPassword />
        <FormBtn />
        <StyledInfo>
          Don’t have account yet?
          <button type="button" onClick={toggleSignIn}>
            New Account
          </button>
        </StyledInfo>
      </StyledForm>
    </StyledWrapper>
  );
};

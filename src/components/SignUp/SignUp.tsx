import { FormBtn } from "../FormBtn/FormBtn";
import { InputPassword } from "../InputPassword/InputPassword";
import {
  StyledForm,
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledInfo,
} from "./SignUp.styled";

export const SignUp: React.FC<{
  toggleSignIn: () => void;
}> = ({ toggleSignIn }) => {
  return (
    <StyledForm>
      <StyledLabel>Full Name</StyledLabel>
      <StyledInputWrapper>
        <StyledInput type="text" />
      </StyledInputWrapper>
      <StyledLabel>User Name</StyledLabel>
      <StyledInputWrapper>
        <StyledInput type="text" />
      </StyledInputWrapper>
      <InputPassword />
      <InputPassword />
      <FormBtn />
      <StyledInfo>
        I have an account.
        <button type="button" onClick={toggleSignIn}>
          Go to Sign in
        </button>
      </StyledInfo>
    </StyledForm>
  );
};

import { FormBtn } from "../FormBtn/FormBtn";
import { InputPassword } from "../InputPassword/InputPassword";
import {
  StyledWrapper,
  StyledTitle,
  StyledForm,
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledInfo,
  StyledBtn,
  StyledMessage,
} from "./SignUp.styled";
import { useForm } from "react-hook-form";
import { formConfig, FormData } from "./formConfig";

export const SignUp: React.FC<{
  toggleSignIn: () => void;
}> = ({ toggleSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ ...formConfig, mode: "onTouched" });
  const onSubmit = (data: FormData) => console.log(data);
  console.log(errors);
  return (
    <StyledWrapper>
      <StyledTitle>Sign Up</StyledTitle>
      <StyledForm>
        <StyledLabel>Full Name</StyledLabel>

        <StyledInputWrapper>
          <StyledInput
            type="text"
            {...register("fullName")}
            autoComplete="off"
          />
        </StyledInputWrapper>
        {!!errors.fullName && (
          <StyledMessage>{errors.fullName?.message}</StyledMessage>
        )}
        <StyledLabel>User Name</StyledLabel>
        <StyledInputWrapper>
          <StyledInput type="text" {...register("name")} autoComplete="off" />
        </StyledInputWrapper>
        {!!errors.name && <StyledMessage>{errors.name?.message}</StyledMessage>}
        <InputPassword {...register("password")} />
        {!!errors.password && (
          <StyledMessage>{errors.password?.message}</StyledMessage>
        )}
        <InputPassword {...register("confirmPwd")} />
        {!!errors.confirmPwd && (
          <StyledMessage>{errors.confirmPwd?.message}</StyledMessage>
        )}
        <FormBtn disabled={!isValid} onClick={handleSubmit(onSubmit)}>
          Sign Up
        </FormBtn>
        <StyledInfo>
          I have an account.
          <StyledBtn type="button" onClick={toggleSignIn}>
            Go to Sign in
          </StyledBtn>
        </StyledInfo>
      </StyledForm>
    </StyledWrapper>
  );
};

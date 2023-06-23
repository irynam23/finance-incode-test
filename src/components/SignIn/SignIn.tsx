import { useForm } from "react-hook-form";
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
  StyledBtn,
  StyledMessage,
} from "./SignIn.styled";
import { formConfig, FormData } from "./formConfig";

export const SignIn: React.FC<{
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
      <StyledTitle>Sign In</StyledTitle>
      <StyledForm autoComplete="off">
        <StyledLabel>User Name</StyledLabel>
        <StyledInputWrapper>
          <StyledInput type="text" {...register("name")} autoComplete="off" />
        </StyledInputWrapper>
        {!!errors.name && <StyledMessage>{errors.name?.message}</StyledMessage>}
        <InputPassword {...register("password")} />
        {!!errors.password && (
          <StyledMessage>{errors.password?.message}</StyledMessage>
        )}
        <FormBtn disabled={!isValid} onClick={handleSubmit(onSubmit)}>
          Sign In
        </FormBtn>
        <StyledInfo>
          Don’t have account yet?
          <StyledBtn type="button" onClick={toggleSignIn}>
            New Account
          </StyledBtn>
        </StyledInfo>
      </StyledForm>
    </StyledWrapper>
  );
};

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
import { useAppDispatch } from "../../redux/store";
import * as authOperations from "../../redux/auth/operations";

export const SignUp: React.FC<{
  toggleSignIn: () => void;
}> = ({ toggleSignIn }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ ...formConfig, mode: "onTouched" });
  const onSubmit = (data: FormData) => {
    dispatch(
      authOperations.register({
        password: data.password,
        username: data.name,
        displayName: data.fullName,
      })
    );
    reset();
    toggleSignIn();
  };

  return (
    <StyledWrapper>
      <StyledTitle>Sign Up</StyledTitle>
      <StyledForm>
        <StyledLabel>Full Name</StyledLabel>

        <StyledInputWrapper>
          <StyledInput
            type="text"
            placeholder="Example Name"
            {...register("fullName")}
            autoComplete="off"
          />
        </StyledInputWrapper>
        {!!errors.fullName && (
          <StyledMessage>{errors.fullName?.message}</StyledMessage>
        )}
        <StyledLabel>User Name</StyledLabel>
        <StyledInputWrapper>
          <StyledInput
            type="text"
            placeholder="Example123"
            {...register("name")}
            autoComplete="off"
          />
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

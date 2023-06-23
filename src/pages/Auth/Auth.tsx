import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { SignIn } from "../../components/SignIn/SignIn";
import { SignUp } from "../../components/SignUp/SignUp";
import { StyledContainer, StyledWrapper } from "./Auth.styled";

export const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <Header />
        {isSignIn ? (
          <SignIn toggleSignIn={toggleSignIn} />
        ) : (
          <SignUp toggleSignIn={toggleSignIn} />
        )}
      </StyledContainer>
    </StyledWrapper>
  );
};

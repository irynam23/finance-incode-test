import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { SignIn } from "../../components/SignIn/SignIn";
import { SignUp } from "../../components/SignUp/SignUp";
import { StyledContainer, StyledWrapper } from "./Auth.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) return;
    navigate("/");
  }, [isLoggedIn, navigate]);
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

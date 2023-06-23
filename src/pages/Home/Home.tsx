import { Header } from "../../components/Header/Header";
import {
  StyledContainer,
  StyledWrapper,
  StyledTitle,
  StyledInfo,
  StyledButton,
  StyledImageDec,
  StyledImageVec,
} from "./Home.styled";
import decor from "../../images/decor.png";
import vector from "../../images/vector.png";
import { useAppDispatch } from "../../redux/store";
import * as authOperations from "../../redux/auth/operations";

export const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <StyledWrapper>
      <Header />
      <StyledContainer>
        <StyledImageDec src={decor} alt="decor"></StyledImageDec>
        <StyledTitle>Congratulations</StyledTitle>
        <StyledInfo>
          Now you are on the main page. Soon we will provide you with detailed
          feedback on the result of your work
        </StyledInfo>
        <StyledButton
          onClick={() => {
            dispatch(authOperations.logOut());
          }}
        >
          Log Out
        </StyledButton>
        <StyledImageVec src={vector} alt="vector"></StyledImageVec>
      </StyledContainer>
    </StyledWrapper>
  );
};

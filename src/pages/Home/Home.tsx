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

export const Home = () => {
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
        <StyledButton>Log Out</StyledButton>
        <StyledImageVec src={vector} alt="vector"></StyledImageVec>
      </StyledContainer>
    </StyledWrapper>
  );
};

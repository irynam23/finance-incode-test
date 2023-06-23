import { Header } from "../../components/Header/Header";
import { StyledContainer, StyledWrapper } from "./Home.styled";
import decor from "../../images/decor.png";
import vector from "../../images/vector.png";

export const Home = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Header />
        <img src={decor} alt="decor"></img>
        <h1>Congratulations</h1>
        <p>
          Now you are on the main page. Soon we will provide you with detailed
          feedback on the result of your work
        </p>
        <button>Log Out</button>
        <img src={vector} alt="vector"></img>
      </StyledContainer>
    </StyledWrapper>
  );
};

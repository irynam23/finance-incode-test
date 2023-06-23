import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: var(--black, #1d283a);
  padding: 48px;
  position: relative;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 109px;
`;

export const StyledImageDec = styled.img`
  position: absolute;
  top: 120px;
  left: 855px;
`;

export const StyledImageVec = styled.img`
  margin-top: 72.11px;
`;

export const StyledTitle = styled.h2`
  color: var(--white, #fff);
  font-size: 48px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
`;

export const StyledInfo = styled.p`
  width: 466px;
  color: var(--white, #fff);
  text-align: center;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 1.55;
  margin-top: 48px;
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  cursor: pointer;
  height: 44px;
  padding: 9.5px 16px;
  color: var(--white, #fff);
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 1.55;
  background-color: var(--greener, #539713);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
`;

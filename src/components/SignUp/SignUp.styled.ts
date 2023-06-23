import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top: 71px;
  width: 328px;
`;

export const StyledTitle = styled.h1`
  color: var(--white, #fff);
  font-size: 56px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 1.68px;
  text-transform: uppercase;
  margin-bottom: 48px;
`;

export const StyledForm = styled.form`
  background-color: transparent;
  padding: 0;
  border-radius: 5px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: white;
  &:not(:first-child) {
    margin-top: 24px;
  }
`;

export const StyledInputWrapper = styled.div`
  border-bottom: 1px solid white;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  font-size: 14px;
  font-family: Montserrat;
  line-height: 1.55;
  color: white;
  background-color: transparent;
  outline: none;
`;

export const StyledInfo = styled.p`
  color: #f1f2f1;
  font-size: 12px;
  font-family: Montserrat;
  line-height: 1.55;
  margin-top: 24px;
`;

export const StyledMessage = styled.p`
  color: red;
  font-size: 12px;
  font-family: Montserrat;
  line-height: 1.55;
  margin: 0;
`;

export const StyledBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #7faaf0;
  cursor: pointer;
  font-size: 12px;
  font-family: Montserrat;
  line-height: 1.55;
`;

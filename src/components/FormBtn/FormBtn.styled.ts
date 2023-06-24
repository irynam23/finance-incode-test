import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  cursor: pointer;
  margin-top: 41.5px;
  width: 330px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  font-size: 16px;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.55;
  background-color: #539713;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);

  &:disabled {
    cursor: not-allowed;
  }
`;

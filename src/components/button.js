import React from "react";
import styled from "styled-components";

const cyanBlue = "#307FE2";

const Button = styled.button`
  background: ${cyanBlue};
  height: 30px;
  width: 100px;
  border: unset;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
`;

const ButtonPrimary = ({ label }) => {
  return <Button>{label}</Button>;
};

export default ButtonPrimary;

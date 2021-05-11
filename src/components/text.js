import React from "react";
import styled from "styled-components";

const cyanBlue = "#307FE2";

const TextStyle = styled.h1`
  color: ${cyanBlue};
`;

const Text = ({ text }) => {
  return <TextStyle>{text}</TextStyle>;
};

export default Text;

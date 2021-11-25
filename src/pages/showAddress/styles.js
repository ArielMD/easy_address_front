import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h3`
  font-size: 1.2rem;
  text-align: center;
`;

export const Button = styled(Link)`
  color: white;
  justify-self: center;
  margin: 0 1rem;
`;

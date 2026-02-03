import styled from "styled-components";
import * as colors from "../../config/colors";

export const Title = styled.h1`
  margin: 20px auto;
  color: ${colors.textcolor};
  width: 70%;
  border-radius: 15px;
  text-align: center;
  font-size: 28px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  width: 60%;
  max-width: 1200px;
  margin: 32px auto;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-items: center;
  padding: 16px;
  color: ${colors.warningColor};
`;
export const Image = styled.div`
  align-items: flex-end;
  display: flex;
  justify-items: center;
  align-items: center;
  img {
    margin: 0 auto;
    width: 80%;
    border-radius: 15px;
  }
`;

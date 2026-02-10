import styled from "styled-components";

export const Title = styled.h1`
  margin: 20px auto;
  color: #f2a900;
  width: 70%;
  border-radius: 15px;
  text-align: center;
  font-size: 38px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

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
  padding: 24px;
  color: white;
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  img,
  video {
    width: 90%;
    max-width: 600px;
    height: auto;
    aspect-ratio: 9 / 16;
    border-radius: 15px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img,
    video {
      width: 100%;
      max-width: 100%;
    }
  }
`;

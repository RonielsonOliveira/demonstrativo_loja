import styled from "styled-components";

export const Title = styled.h1`
  color: #f2a900;
  font-size: clamp(24px, 4vw, 36px);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;
  align-items: start;

  width: min(100%, 1200px);
  margin: 40px auto 80px auto;
  padding: 0 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;

  gap: 14px;
  max-width: 520px;
`;
export const Description = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 1.7;
`;

export const Image = styled.div`
  width: 100%;
  max-width: 280px;

  border-radius: 8px;
  aspect-ratio: 9 / 16;

  overflow: hidden;

  img,
  video {
    width: 100%;
    height: 100%;
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

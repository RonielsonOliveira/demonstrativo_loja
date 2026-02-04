import styled from "styled-components";
export const CardsContainer = styled.section`
  width: 100%;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  justify-items: center;
`;

export const Info = styled.div`
  width: 100%;
  max-width: 240px;
  height: 220px;

  background: rgba(0, 0, 0, 0.55);
  color: #f9fafb;

  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  padding: 30px;
  border-radius: 2px;
  position: relative;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  }

  img {
    width: 280px;
    height: 180px;
    background: #111827;
    object-fit: cover;
    object-position: top;
  }
  a {
    width: 100%;
    background: #111827;
    color: #fff;
    text-decoration: wavy;
    padding: 8px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    transition:
      filter 0.2s ease,
      transform 0.2s ease;
  }
`;
export const Title = styled.h2`
  width: 100%;
  background: #111827;
  color: #fff;
  margin-bottom: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;
export const Description = styled.p`
  font-size: 15px;
  width: 100%;
  min-height: 80px;
  max-height: 120px;
  line-height: 1.4;
  color: #d1d5db;
  text-align: center;
  display: flex;
  flex-direction: center;
  align-items: center;
  gap: 12px;
  overflow: hidden;
`;
export const Endereco = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

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
  height: 220px; /* altura padronizada */

  background: #111827;
  color: #f9fafb;

  display: flex;
  align-items: center;
  gap: 16px;

  padding: 30px;
  border-radius: 16px;
  position: relative;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  overflow: hidden; /* impede estouro */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  }
  .number {
    position: absolute;
    top: 16px;
    left: 20px;
    width: 42px;
    height: 42px;
    background: #111827;
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nacionality {
    position: absolute;
    top: 16px;
    right: 20px;
    width: 42px;
    height: 42px;
    background: #111827;
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .titleWinner {
    position: absolute;
    bottom: 16px;
    left: 20px;
    width: 42px;
    height: 42px;
    background: #111827;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .titleWinner svg {
    width: 40px;
    height: 40px;
  }
  .titleWinner span {
    position: absolute;
    font-size: 18px;
    font-weight: 700;
    bottom: 2px;
    right: -2px;
  }
  .teamLogo {
    position: absolute;
    bottom: 10px;
    right: 20px;
    width: 52px;
    height: 52px;
    background-color: #111827;
    color: #fff;
    font-size: 50px;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
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

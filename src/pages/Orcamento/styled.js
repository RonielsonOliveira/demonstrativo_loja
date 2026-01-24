import styled from "styled-components";
import * as colors from "../../config/colors";

export const Title = styled.h1`
  margin: 20px auto;
  color: ${colors.textcolor};
  text-align: center;
  font-size: 28px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 64px;
  width: 100%;
  max-width: 1200px;
  margin: 32px auto;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
  }
`;

export const Description = styled.div`
  max-width: 420px;
  color: #fff;

  span {
    font-size: 20px;
    line-height: 1.6;
  }

  .Title {
    color: ${colors.textcolor};
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    text-align: center;
    max-width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  label {
    font-size: 18px;
    color: ${colors.textcolor};
    text-align: center;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  button {
    position: relative;
    margin-top: 24px;
    margin: 0 auto;
    padding: 14px 32px;

    background: linear-gradient(
      135deg,
      ${colors.textcolor},
      ${colors.textcolor}cc
    );

    color: ${colors.primaryColor};
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;

    border: 2px solid ${colors.textcolor};
    border-radius: 12px;

    cursor: pointer;
    outline: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    box-shadow:
      0 0 14px ${colors.textcolor}55,
      inset 0 1px 0 rgba(255, 255, 255, 0.25);

    transition:
      transform 0.25s ease,
      filter 0.25s ease;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(
        120deg,
        transparent 25%,
        rgba(255, 255, 255, 0.45),
        transparent 70%
      );
      opacity: 0.5;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }

    &:hover {
      filter: brightness(1.15) saturate(1.1);
      transform: translateY(-2px) scale(1.04);

      &::before {
        opacity: 0.85;
      }
    }

    &:active {
      transform: scale(0.97);
      filter: brightness(1.05);
    }

    &:focus-visible {
      outline: 3px solid ${colors.textcolor};
      outline-offset: 3px;
    }

    @media (max-width: 768px) {
      width: 80%;
      font-size: 18px;
      padding: 12px 24px;
    }
  }

  a {
    text-align: center;
    font-size: 16px;
  }
`;

export const Checkbox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 12px 0;

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
  }

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #555;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: 0.2s;
  }

  input[type="checkbox"]:checked {
    background-color: ${colors.primaryColor};
    border-color: ${colors.primaryColor};
  }

  input[type="checkbox"]:checked::after {
    content: "✓";
    position: absolute;
    top: -2px;
    left: 4px;
    font-size: 16px;
    color: ${colors.textcolor};
    font-weight: bold;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

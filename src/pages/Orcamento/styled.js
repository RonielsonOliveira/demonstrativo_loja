import styled from "styled-components";
import * as colors from "../../config/colors";

export const Title = styled.h1`
  margin: 20px auto;
  color: #f2a900;
  text-align: center;
  font-size: 32px;
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
  color: #e6e6e6;
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
  color: #e6e6e6;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  label {
    font-size: 18px;
    color: #e6e6e6;
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
    color: #e6e6e6;
  }

  textarea {
    min-height: 120px;
    resize: vertical;
    color: #2e2e2e;
  }

  button {
    padding: 16px 28px;
    font-size: clamp(14px, 4vw, 18px);
    font-weight: 700;
    min-width: 200px;

    background: #f2a900;
    color: #fff;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    a {
      text-decoration: none;
    }

    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.06);
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
      }
    }
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
    color: #e6e6e6;
  }

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #f2a900;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: 0.2s;
  }

  input[type="checkbox"]:checked {
    background-color: #3a3f45;
    border-color: #3a3f45;
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

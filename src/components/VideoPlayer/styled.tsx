import styled from "styled-components";

export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 12px;

  background: rgba(0, 0, 0, 0.6);
  padding: 10px 14px;
  border-radius: 30px;
`;

export const ControlButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;

  font-size: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: scale(1.15);
    opacity: 0.85;
  }

  &:active {
    transform: scale(0.95);
  }
`;

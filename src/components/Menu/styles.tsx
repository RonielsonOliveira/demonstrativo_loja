import styled, { css } from "styled-components";
import media from "styled-media-query";
import { FloatingCTA } from "../../pages/Home/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.spacings.small};
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 110px;
    z-index: ${theme.layers.menu};
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);

    ${media.lessThan("large")`
      height: auto;
    `}

    ${media.lessThan("medium")`
      height: 80px;
    `}
  `}
`;

export const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${media.lessThan("medium")`
    display: flex;
  `}

  ${media.greaterThan("large")`
    display: none;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan("medium")`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    flex-grow: 1;
    align-items: center;
    cursor: pointer;
    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
export const CloseIcon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacings.medium};
    right: ${theme.spacings.medium};
    color: ${theme.colors.white};
    cursor: pointer;
  `}
`;
export const MenuGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${media.lessThan("medium")`
  display: none;
  `}
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const SocialGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 120px;
    height: auto;
    display: block;
  }
`;
export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacings.xxsmall};
`;
export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: relative;
    cursor: pointer;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: "";
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.white};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;
export const IconLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;
    align-self: center;
    font-size: ${theme.font.sizes.medium};
    margin: 1.4rem 10px auto;
    text-decoration: none;
    text-align: center;
    align-items: center;
    &:hover {
      &::after {
        content: "";
        position: absolute;
        display: block;
        height: 0.3rem;
        animation: hoverAnimation 0.4s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;
export type MenuFullProps = {
  isOpen: boolean;
};
export const MenuNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    width: 100%;
  `}
`;

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100svh;
    background: #3a3f45;
    z-index: ${theme.layers.menu};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? "all" : "none"};
    transition: opacity 0.3s ease;

    ${FloatingCTA} {
      text-decoration: none;
      display: none;
    }

    ${MenuNav} {
      gap: ${theme.spacings.xsmall};
    }

    ${NavGroup} {
      flex-direction: column;
      gap: ${theme.spacings.xsmall};
    }

    ${SocialGroup} {
      margin-top: ${theme.spacings.xsmall};
    }

    ${MenuLink} {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;

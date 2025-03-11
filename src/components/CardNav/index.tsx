import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useI18n from 'hooks/useI18n';

const StyledNav = styled.div`
  margin-bottom: 40px;
`;

const CustomButtonMenu = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  padding: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CustomButtonMenuItem = styled(Link)<{ active?: boolean }>`
  padding: 8px 16px;
  text-align: center;
  flex: 1;
  font-weight: 500;
  color: ${({ theme, active }) => (active ? theme.colors.text : theme.colors.textSubtle)};
  background-color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.background)};
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.primary)};
    color: ${({ theme }) => theme.colors.text};
  }
`;

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n();
  return (
    <StyledNav>
      <CustomButtonMenu>
        <CustomButtonMenuItem to="/swap" active={activeIndex === 0}>
          {TranslateString(1142, 'Swap')}
        </CustomButtonMenuItem>
        <CustomButtonMenuItem to="/pool" active={activeIndex === 1}>
          {TranslateString(262, 'Liquidity')}
        </CustomButtonMenuItem>
        <CustomButtonMenuItem as="a" href="https://bridge.privix.co/" active={activeIndex === 2}>
          {TranslateString(262, 'bridge')}
        </CustomButtonMenuItem>
      </CustomButtonMenu>
    </StyledNav>
  );
}

export default Nav;

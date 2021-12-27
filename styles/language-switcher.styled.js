import styled from 'styled-components';

export const LanguageSwitcherWrapper = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
`;

export const LanguageItem = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export const LanguageLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
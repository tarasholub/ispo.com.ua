import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin: 0 0 16px 0;
  border-bottom: 1px dashed black;
`;

export const HeaderLogo = styled.a`
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;
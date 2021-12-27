import Link from 'next/link';

// Components
import LanguageSwitcher from 'components/LanguageSwitcher';

// Styles
import * as Styled from 'styles/header.styled';

const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Link href={"/"}>HOME</Link>
      <LanguageSwitcher/>
    </Styled.HeaderWrapper>
  )
}

export default Header;
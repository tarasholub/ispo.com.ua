import Link from 'next/link';
import { useRouter } from 'next/router';

// Styles
import * as Styled from 'styles/language-switcher.styled';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { pathname, locale, query } = router;
  const { uid } = query;
  const path = pathname.replace('[uid]', uid);

  return (
    <Styled.LanguageSwitcherWrapper>
      {router?.locales.map(lang => {
        return (lang !== locale) && (
          <Styled.LanguageItem key={lang}>
            <Link href={`${path}`} locale={lang}>
              <Styled.LanguageLink>{lang}</Styled.LanguageLink>
            </Link>
        </Styled.LanguageItem>
        )
      })}
    </Styled.LanguageSwitcherWrapper>
  )
}

export default LanguageSwitcher;
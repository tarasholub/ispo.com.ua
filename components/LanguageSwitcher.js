import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const uid = router.query.uid;
  const path = pathname.replace('[uid]', uid);

  return (
    <ul>
      {router?.locales.map(lang => (
        <li key={lang}>
          <Link href={`${path}`} locale={lang}>{lang}</Link>
        </li>
      ))}
    </ul>
  )
}

export default LanguageSwitcher;
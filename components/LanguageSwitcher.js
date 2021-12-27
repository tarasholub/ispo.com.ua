import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  return (
    <ul>
      {router?.locales.map(lang => (
        <li key={lang}>{lang}</li>
      ))}
    </ul>
  )
}

export default LanguageSwitcher;
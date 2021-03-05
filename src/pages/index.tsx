import { useRouter } from 'next/router';

import Translation from '@components/Translation';

export default function Home() {
  const { replace, locale, query } = useRouter();
  return (
    <div>
      <button onClick={() => replace('/', '/', { locale: locale === 'pt-BR' ? 'en-US' : 'pt-BR' })}>
        <Translation translationKey="hello" /> {locale} {locale === 'pt-BR' ? '/en-US' : '/'}
      </button>
    </div>
  );
}

import { useRouter } from 'next/router';

import Translation from '@components/Translation';

export default function Profile() {
  const { replace, locale, basePath, query } = useRouter();
  console.log(query);
  return (
    <div>
      <button onClick={() => replace('/', undefined, { locale: locale === 'pt-BR' ? 'en-US' : 'pt-BR' })}>
        <Translation translationKey="hello" /> {locale} {locale === 'pt-BR' ? '/en-US' : '/'}
      </button>
    </div>
  );
}

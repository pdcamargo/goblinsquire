import { useRouter } from 'next/router';

export default function Home() {
  const { replace, locale, query } = useRouter();
  return (
    <div>
      <button onClick={() => replace('/', '/', { locale: locale === 'pt-BR' ? 'en-US' : 'pt-BR' })}></button>
    </div>
  );
}

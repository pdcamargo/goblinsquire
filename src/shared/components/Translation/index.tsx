import { useTranslation } from '@providers/TranslationProvider';

import { TranslationProps } from './types';

const Translation: React.FC<TranslationProps> = ({ translationKey, params, space = 'common' }) => {
  const { t } = useTranslation(space);

  return <>{t(translationKey, params)}</>;
};

export default Translation;
export const T = Translation;

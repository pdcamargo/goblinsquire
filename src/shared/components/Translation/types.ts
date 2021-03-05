import { TranslationFileName } from '@providers/TranslationProvider/types';

export type TranslationProps = {
  space?: TranslationFileName;
  translationKey: string;
  params?: Record<string, string>;
};

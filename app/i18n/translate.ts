// import {useStores} from '../models';
import { Scope } from './types';
import i18n from 'i18n-js';

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(key: Scope, options?: i18n.TranslateOptions) {
  return key ? i18n.t(key, options) : '';
}

export const useI18n = () => {
  //   const {
  //     authStore: {language},
  //   } = useStores();
  const language = { id: '1', key: 'eng', name: 'ENGLISH' };

  return (text: Scope) => i18n.t(text, { locale: language });
};

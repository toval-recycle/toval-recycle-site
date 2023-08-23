import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function useChangeAppLanguage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('siteTitle');
  }, [i18n.language]);

  return [t('direction')];
}

export default useChangeAppLanguage;

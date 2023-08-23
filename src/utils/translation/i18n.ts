import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { footer_en, footer_heb } from './sections/footer';
import { home_en, home_heb } from './sections/home';
import { aboutUs_en, aboutUs_heb } from './sections/about-us';
import { whatWeDo_en, whatWeDo_heb } from './sections/what-we-do';
import { contactUs_en, contactUs_heb } from './sections/contact-us';
import { navbar_en, navbar_heb } from './sections/nav-bar';

const resources = {
  en: {
    translation: {
      direction: 'ltr',
      siteTitle: 'Toval recycle',
      home: { ...home_en },
      aboutUs: { ...aboutUs_en },
      whatWeDo: { ...whatWeDo_en },
      contactUs: { ...contactUs_en },
      footer: { ...footer_en },
      navBar: { ...navbar_en },
    },
  },
  heb: {
    translation: {
      direction: 'rtl',
      siteTitle: 'תובל מיחזור',
      home: { ...home_heb },
      aboutUs: { ...aboutUs_heb },
      whatWeDo: { ...whatWeDo_heb },
      contactUs: { ...contactUs_heb },
      footer: { ...footer_heb },
      navBar: { ...navbar_heb },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'heb', // Default language
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;

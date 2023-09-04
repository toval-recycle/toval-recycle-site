export const sectionsID = {
  home: 'home',
  aboutUs: 'about',
  whatWeAreDoing: 'what-we-do',
  getInTouch: 'contact',
};

export const siteOffset = () => {
  return window.innerWidth > 768 ? 120 : 100;
};

export const sectionsData = [
  { nameToDisplay: 'Home', sectionId: sectionsID.home },
  { nameToDisplay: 'About us', sectionId: sectionsID.aboutUs },
  { nameToDisplay: 'Services', sectionId: sectionsID.whatWeAreDoing },
  { nameToDisplay: 'Get in touch', sectionId: sectionsID.getInTouch },
];
export const siteBreakPoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

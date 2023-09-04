import { useMediaQuery } from 'react-responsive';
import { cn } from '../../utils/cn';
import { sectionsID, siteOffset } from '../../utils/projectData';
import DrawerMenu from './Drawer';
import ScrollLink from '../../components/ScrollLink';
import useApplyLinkStyle from './hooks/useApplyLinkStyle';
import useApplyNavBarStyle from './hooks/useApplyNavBarStyle';
import { useTranslation } from 'react-i18next';
import LanguageButton from '../../components/languageButton/LanguageButton';
import LazyImage from '../../components/LazyImage';

function NavBar() {
  const { t } = useTranslation();
  const [navBarStyle] = useApplyNavBarStyle();
  const [activeSection] = useApplyLinkStyle({ offset: siteOffset() });
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const sectionsData = [
    { nameToDisplay: t('navBar.home'), sectionId: sectionsID.home },
    { nameToDisplay: t('navBar.aboutUs'), sectionId: sectionsID.aboutUs },
    {
      nameToDisplay: t('navBar.whatWeDo'),
      sectionId: sectionsID.whatWeAreDoing,
    },
    { nameToDisplay: t('navBar.contactUs'), sectionId: sectionsID.getInTouch },
  ];
  return (
    <nav
      className={cn(
        'fixed top-0 h-16 sm:h-20 z-20 mx-auto flex w-screen items-center justify-between bg-white px-7 py-3 shadow-sm transition duration-700 xl:px-16',
        navBarStyle
      )}
    >
      {!isMobile ? (
        <ul className="flex h-full flex-row items-center justify-center gap-10 text-lg">
          {sectionsData.map(({ nameToDisplay, sectionId }) => {
            const isLinkSectionActive = activeSection === sectionId;
            return (
              <li key={sectionId}>
                <ScrollLink
                  to={sectionId}
                  className={cn(
                    'cursor-pointer font-semibold text-black hover:text-main capitalize',
                    isLinkSectionActive ? 'text-main' : ''
                  )}
                >
                  {nameToDisplay}
                </ScrollLink>
              </li>
            );
          })}
        </ul>
      ) : (
        <DrawerMenu activeSection={activeSection} sectionsData={sectionsData} />
      )}
      <div className="flex items-center gap-4">
        <LanguageButton />
        <LazyImage
          alt="site-image"
          src="/logo.svg"
          lowSrc="/logo-low.png"
          className="aspect-auto object-cover w-12 sm:w-20 h-full"
        />
      </div>
    </nav>
  );
}

export default NavBar;
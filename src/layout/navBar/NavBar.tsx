import { useMediaQuery } from "react-responsive";
import { cn } from "../../utils/cn";
import {
  sectionsID,
  siteBreakPoints,
  siteOffset,
} from "../../utils/projectData";
import DrawerMenu from "./Drawer";
import ScrollLink from "../../components/ScrollLink";
import useApplyLinkStyle from "./hooks/useApplyLinkStyle";
import useApplyNavBarStyle from "./hooks/useApplyNavBarStyle";
import { useTranslation } from "react-i18next";
import LanguageButton from "../../components/languageButton/LanguageButton";
import LazyImage from "../../components/LazyImage";

function NavBar() {
  const { t } = useTranslation();
  const [navBarStyle] = useApplyNavBarStyle();
  const [activeSection] = useApplyLinkStyle({ offset: siteOffset() });
  const isMobile = useMediaQuery({ maxWidth: siteBreakPoints.sm });
  const sectionsData = [
    { nameToDisplay: t("navBar.home"), sectionId: sectionsID.home },
    { nameToDisplay: t("navBar.aboutUs"), sectionId: sectionsID.aboutUs },
    {
      nameToDisplay: t("navBar.whatWeDo"),
      sectionId: sectionsID.whatWeAreDoing,
    },
    { nameToDisplay: t("navBar.contactUs"), sectionId: sectionsID.getInTouch },
  ];
  return (
    <nav
      className={cn(
        "fixed top-0 z-20 mx-auto flex h-16 w-screen items-center justify-between bg-white px-7 py-3 shadow-sm transition duration-700 sm:h-20 xl:px-16",
        navBarStyle,
      )}
    >
      <ul className="hidden h-full flex-row items-center justify-center gap-10 text-lg sm:flex">
        {sectionsData.map(({ nameToDisplay, sectionId }) => {
          const isLinkSectionActive = activeSection === sectionId;
          return (
            <li key={sectionId}>
              <ScrollLink
                to={sectionId}
                className={cn(
                  "cursor-pointer font-semibold capitalize text-black hover:text-main",
                  isLinkSectionActive ? "text-main" : "",
                )}
              >
                {nameToDisplay}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
      <div className="flex sm:hidden">
        <DrawerMenu activeSection={activeSection} sectionsData={sectionsData} />
      </div>{" "}
      <div className="flex items-center gap-4">
        <LanguageButton />
        <LazyImage
          alt="site-image"
          src="/logo.svg"
          lowSrc="/logo-low.png"
          className="aspect-auto h-full w-12 object-cover sm:w-20"
        />
      </div>
    </nav>
  );
}

export default NavBar;

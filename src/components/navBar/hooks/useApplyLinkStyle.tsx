import React, { useEffect, useState } from 'react';
import { sectionsID } from '../../../utils/projectData';

interface useApplyLinkStyleProps {
  offset: number;
}
function useApplyLinkStyle({ offset }: useApplyLinkStyleProps) {
  const [activeSection, setActiveSection] = useState(sectionsID.home);

  // Function to handle scrolling and update the active section
  const handleScroll = () => {
    const scrollY = window.scrollY + offset;
    const viewportHeight = window.innerHeight;

    for (const section of Object.values(sectionsID)) {
      const sectionElement = document.getElementById(section);
      if (!sectionElement) continue;

      const sectionTop = sectionElement.offsetTop;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;

      const middleViewport = scrollY + viewportHeight / 3;

      if (middleViewport >= sectionTop && middleViewport < sectionBottom) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    // Attach the event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return [activeSection];
}

export default useApplyLinkStyle;

import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ScrollLink from '../ScrollLink';
import { cn } from '../../utils/cn';

interface DrawerMenuProps {
  activeSection: string;
  sectionsData: {
    nameToDisplay: string;
    sectionId: string;
  }[];
}
function DrawerMenu({ activeSection, sectionsData }: DrawerMenuProps) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <>
      <Drawer anchor="top" open={openDrawer} onClose={toggleDrawer(false)}>
        <div className="my-4 flex w-full flex-col items-center justify-center gap-8 font-semibold">
          {sectionsData.map(({ nameToDisplay, sectionId }, index) => {
            const isLinkSectionActive = activeSection === sectionId;
            return (
              <ScrollLink key={index} to={sectionId} className="w-full">
                <h1
                  onClick={toggleDrawer(false)}
                  className={cn(
                    'flex w-full cursor-pointer justify-center py-2 text-2xl font-semibold hover:text-main capitalize',
                    isLinkSectionActive ? 'text-main' : ''
                  )}
                >
                  {nameToDisplay}
                </h1>
              </ScrollLink>
            );
          })}
        </div>
      </Drawer>
      <MenuIcon
        className=" cursor-pointer text-2xl text-black"
        onClick={toggleDrawer(true)}
      />
    </>
  );
}
export default DrawerMenu;

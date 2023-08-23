import React from 'react';
import { useTranslation } from 'react-i18next';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  const { t } = useTranslation();
  const RIGHTS = t('footer.rights');

  return (
    <div className="bg-third flex justify-center">
      <div className="w-full max-w-site p-5 md:p-9 flex flex-col gap-4 ">
        <div className="bg-[#FFFFFF] w-full h-[1px] opacity-40"></div>
        <div className="flex items-center justify-between flex-col lg:flex-row gap-2 lg:gap-10">
          <div className="flex gap-2">
            <SocialIcon
              url="https://twitter.com"
              target="_blank"
              fgColor="white"
              bgColor="grey"
            />
            <SocialIcon
              url="https://youtube.com"
              target="_blank"
              fgColor="white"
              bgColor="grey"
            />
            <SocialIcon
              url="https://facebook.com"
              target="_blank"
              fgColor="white"
              bgColor="grey"
            />
          </div>
          <div className="w-full my-5 flex justify-center text-center text-white opacity-80">
            <p>{RIGHTS}</p>
          </div>
          <div>
            <img src="/logo-white.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

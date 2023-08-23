import React, { ReactNode, forwardRef } from 'react';
import { siteOffset } from '../utils/projectData';
import { Link, LinkProps } from 'react-scroll';

interface ScrollLinkProps extends LinkProps {
  children: ReactNode;
}

function ScrollLink({ children, ...props }: ScrollLinkProps, ref: any) {
  return (
    <Link
      ref={ref}
      smooth={true}
      duration={0}
      offset={-siteOffset()}
      {...props}
    >
      {children}
    </Link>
  );
}

export default forwardRef<Link, ScrollLinkProps>(ScrollLink);

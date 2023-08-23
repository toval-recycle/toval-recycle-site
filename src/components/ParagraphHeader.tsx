import React, { ReactNode } from 'react';

interface ParagraphHeaderProps {
  children: ReactNode;
}

function ParagraphHeader({ children }: ParagraphHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold uppercase text-third text-center">
        {children} <div className="mt-1 h-1 w-full bg-main px-2" />
      </h1>
    </div>
  );
}

export default ParagraphHeader;

import clsx from 'clsx';
import React from 'react';

interface BoxProps {
  children: React.ReactNode,
  className?: string;
  id?: string;
}

const Box = ({ children, className, id }: BoxProps) => {
  return (
    <div className={clsx("flex flex-col items-center justify-start min-h-screen bg-transparent pt-24", className)} id={id}>{children}</div>
  );
}

export default Box;
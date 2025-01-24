import clsx from 'clsx';
import React from 'react';

interface PageProps {
  children: React.ReactNode,
  className?: string;
  id?: string;
}

const Page = ({ children, className, id }: PageProps) => {
  return (
    <div className={clsx("flex flex-col items-center justify-start min-h-screen pt-24 text-gray-900  dark:bg-slate-900 dark:shadow-black bg-gray-300", className)} id={id}>{children}</div>
  );
}

export default Page;
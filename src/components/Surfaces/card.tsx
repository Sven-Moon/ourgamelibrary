import clsx from 'clsx';
import React from 'react';

interface CardProps {
  children: React.ReactNode,
  className: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={clsx("bg-white p-8 rounded shadow-md w-full max-w-md dark:bg-slate-600 dark:shadow-black", className)}>{children}</div>
  );
}

export default Card;
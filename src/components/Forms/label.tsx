import clsx from 'clsx';
import React from 'react';

interface LabelProps {
  className?: string;
  id?: string;
  text: string | React.ReactNode;
}

const Label = ({ className, id, text }: LabelProps) => {
  return (
    <label htmlFor="id" className={clsx("block text-sm font-medium text-gray-700 dark:text-gray-200", className)} id={id} aria-label="id">{text}</label>
  );
}

export default Label;
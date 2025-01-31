import clsx from 'clsx';
import React from 'react';
import { Button as ButtonBase } from '@mui/base';

interface ButtonPropss {
  className?: string;
  onClick?: () => void;
  text: string | React.ReactNode;
  fill?: 'base' | 'contained' | 'outlined';
}

const fillType = {
  contained: 'bg-slate-500 text-white hover:bg-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:border-slate-400',
  outlined: 'border border-slate-800 text-slate-100 hover:bg-slate-500 hover:text-white dark:bg-transparent dark:border-slate-200 dark:text-slate-100 dark:hover:bg-slate-550 dark:hover:text-white dark:hover:slate-200',
  base: 'bg-transparent text-white dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:border-slate-900',
}
const uiDisabled = 'disabled:text-slate-700 disabled:dark:text-slate-400 disabled:bg-slate-200 disabled:dark:bg-slate-700 disabled:cursor-default disabled:shadow-none disabled:dark:shadow-none disabled:hover:bg-slate-200 disabled:hover:dark:bg-slate-600 disabled:border-none';
const shadow = "shadow-md dark:shadow-black active:shadow-none hover:shadow-none"

import { Button as BaseButton, ButtonProps } from '@mui/base/Button';

interface MyButtonProps extends ButtonProps {
  fill?: 'base' | 'contained' | 'outlined';
}

export const Button = React.forwardRef<HTMLButtonElement, MyButtonProps>(
  (props, ref) => {
    const { className, fill, ...other } = props;
    return (
      <BaseButton
        ref={ref}
        className={clsx(
          'cursor-pointer transition text-sm font-sans font-semibold leading-normal text-white rounded-md px-4 py-2 focus-visible:outline-none',
          shadow,
          uiDisabled,
          className,
          fillType[fill || 'base'],
        )}
        {...other}
      />
    );
  },
);
export default Button;

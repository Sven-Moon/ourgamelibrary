import { useRef, useEffect } from 'react';

interface UsePreviousRef<T> {
  current: T | undefined;
}

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<UsePreviousRef<T>>({ current: undefined });
  useEffect(() => {
    ref.current.current = value;
  });
  return ref.current.current;
}